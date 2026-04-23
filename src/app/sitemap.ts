// app/sitemap.ts
import { MetadataRoute } from 'next'

const BACKEND_URL = 'https://backend.handex.edu.az/api'
const BASE_URL = 'https://handex.edu.az'

// Backend API response tipləri
interface APIResponse<T> {
  data: T[]
  totalPages: number
  totalItems: number
}

interface StaticLastMod {
  key: string
  path: string
  lastmod: string
}

async function fetchStaticLastMods(): Promise<Map<string, Date>> {
  const map = new Map<string, Date>()
  try {
    const response = await fetch(`${BACKEND_URL}/sitemap/lastmod`, {
      next: { revalidate: 3600 },
      headers: { 'Content-Type': 'application/json' },
    })
    if (!response.ok) {
      console.error(`❌ Static lastmod fetch xətası: ${response.status}`)
      return map
    }
    const data: StaticLastMod[] = await response.json()
    for (const item of data) {
      map.set(item.path, getValidDate(item.lastmod))
    }
  } catch (error) {
    console.error('💥 Static lastmod fetch xətası:', error)
  }
  return map
}

// Backend API-dən gələn məlumat tipləri  
interface BlogPost {
  id: number
  slug: string
  createdAt: string
  updatedAt?: string
  title: string
}

// Tarix validasiyası və düzəlişi üçün helper funksiya
function getValidDate(dateString: string): Date {
  if (!dateString) {
    return new Date()
  }
  
  const date = new Date(dateString)
  
  // Əgər tarix valid deyilsə, cari tarixi qaytarırıq
  if (isNaN(date.getTime())) {
    console.warn(`⚠️ Invalid date detected: ${dateString}, using current date`)
    return new Date()
  }
  
  return date
}

interface Course {
  id: number
  slug: string
  createdAt: string
  updatedAt?: string
  title: string
}

async function fetchAllPaginatedData<T>(endpoint: string, extraParams: string = ''): Promise<T[]> {
  const allData: T[] = []
  let page = 0
  let hasMore = true


  while (hasMore) {
    try {
      const url = `${BACKEND_URL}${endpoint}?page=${page}&lang=az${extraParams}`
      
      const response = await fetch(url, {
        next: { revalidate: 3600 },
        headers: {
          'Content-Type': 'application/json',
        }
      })

      if (!response.ok) {
        console.error(`❌ API xətası (${endpoint}, page ${page}): ${response.status}`)
        break
      }

      const result = await response.json()
      if (endpoint === '/study-area') {
        if (Array.isArray(result) && result.length > 0) {
          allData.push(...result)
        }
        hasMore = false
      } else {
        const apiResult = result as APIResponse<T>
        if (apiResult.data && apiResult.data.length > 0) {
          allData.push(...apiResult.data)
        }
        hasMore = page < apiResult.totalPages
      }
      
      page++
    } catch (error) {
      console.error(`💥 Pagination xətası (${endpoint}, page ${page}):`, error)
      break
    }
  }

  return allData
}

const ELAQE_LASTMOD = new Date('2026-04-23')

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticLastMods = await fetchStaticLastMods()
  const getStaticLastMod = (path: string) => staticLastMods.get(path) ?? new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: getStaticLastMod('/'),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/bloq`,
      lastModified: getStaticLastMod('/bloq'),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/haqqimizda`,
      lastModified: getStaticLastMod('/haqqimizda'),
      changeFrequency: 'daily',
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/elaqe`,
      lastModified: ELAQE_LASTMOD,
      changeFrequency: 'daily',
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/korporativ`,
      lastModified: getStaticLastMod('/korporativ'),
      changeFrequency: 'daily',
      priority: 0.1,
    },
  ]

  const [blogPosts, homeCourses] = await Promise.all([
    fetchAllPaginatedData<BlogPost>('/blogs'),
    fetchAllPaginatedData<Course>('/study-area', '&model=home'),
  ])

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/bloq/${post.slug}`,
    lastModified: getValidDate(post.updatedAt ?? post.createdAt),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  const homeCourseRoutes: MetadataRoute.Sitemap = homeCourses.map((course) => ({
    url: `${BASE_URL}/tedris/${course.slug}`,
    lastModified: getValidDate(course.updatedAt ?? course.createdAt),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }))

  return [...staticRoutes, ...blogRoutes, ...homeCourseRoutes]
}