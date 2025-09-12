'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function GTMRouteTracker() {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'virtual_pageview',
        page_path: window.location.pathname + window.location.search,
      })
    }

    handleRouteChange()
    window.addEventListener('popstate', handleRouteChange)

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [router])

  return null
}
