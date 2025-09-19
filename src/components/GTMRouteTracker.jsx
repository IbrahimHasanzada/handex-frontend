'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function GTMRouteTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      
      const searchParams = window.location.search
      const fullPath = pathname + searchParams
      
      window.dataLayer.push({
        event: 'virtual_pageview',
        page_path: fullPath,
      })
      
      console.log('GTM Event sent:', fullPath)
    }
  }, [pathname])

  return null
}