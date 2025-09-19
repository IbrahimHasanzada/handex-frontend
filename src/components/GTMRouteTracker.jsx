'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function GTMRouteTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'virtual_pageview',
        page_path: pathname + (searchParams?.toString() ? `?${searchParams}` : ''),
      })
    }
  }, [pathname, searchParams])

  return null
}
