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

// Backend API-dən gələn məlumat tipləri  
interface BlogPost {
  id: number
  slug: string
  createdAt: string
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

interface News {
  id: number
  slug: string
  createdAt: string
  title: string
}

interface Project {
  id: number
  slug: string
  createdAt: string
  title: string
}

interface Course {
  id: number
  slug: string
  createdAt: string
  title: string
}

interface Service {
  id: number
  slug: string
  createdAt: string
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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.00,
    },
    {
      url: `${BASE_URL}/haqqimizda`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.80,
    },
    {
      url: `${BASE_URL}/xidmetler`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.80,
    },
    {
      url: `${BASE_URL}/layihe`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.80,
    },
    {
      url: `${BASE_URL}/xeberler`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.80,
    },
    {
      url: `${BASE_URL}/bloq`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.00,
    },
    {
      url: `${BASE_URL}/korporativ`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.00,
    },
    {
      url: `${BASE_URL}/elaqe`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.80,
    }
  ]

  
  const [
    blogPosts, 
    news, 
    projects, 
    homeCourses, 
    corporateCourses, 
    services
  ] = await Promise.all([
    fetchAllPaginatedData<BlogPost>('/blogs'),
    fetchAllPaginatedData<News>('/news'), 
    fetchAllPaginatedData<Project>('/project'),
    fetchAllPaginatedData<Course>('/study-area', '&model=home'),
    fetchAllPaginatedData<Course>('/study-area', '&model=corporate'),
    fetchAllPaginatedData<Service>('/service')
  ])

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/bloq/${post.slug}`,
    lastModified: getValidDate(post.createdAt),
    changeFrequency: 'daily' as const,
    priority: 1,
  }))

  const newsRoutes: MetadataRoute.Sitemap = news.map((item) => ({
    url: `${BASE_URL}/xeberler/${item.slug}`,
    lastModified: getValidDate(item.createdAt),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/layihe/${project.slug}`,
    lastModified: getValidDate(project.createdAt),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  const homeCourseRoutes: MetadataRoute.Sitemap = homeCourses.map((course) => ({
    url: `${BASE_URL}/tedris/${course.slug}`,
    lastModified: getValidDate(course.createdAt),
    changeFrequency: 'daily' as const,
    priority: 1,
  }))

  const corporateCourseRoutes: MetadataRoute.Sitemap = corporateCourses.map((course) => ({
    url: `${BASE_URL}/korporativ/tedris/korporativ-${course.slug}`,
    lastModified: getValidDate(course.createdAt),
    changeFrequency: 'daily' as const,
    priority: 1,
  }))

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/xidmetler/${service.slug}`,
    lastModified: getValidDate(service.createdAt),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  const allRoutes = [
    ...staticRoutes,
    ...blogRoutes,
    ...newsRoutes,
    ...projectRoutes,
    ...homeCourseRoutes,
    ...corporateCourseRoutes,
    ...serviceRoutes
  ]

  return allRoutes
}