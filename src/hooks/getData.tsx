"use client"

import apiClient from '@/utils/axiosInstance'
import { useEffect, useState } from 'react'

function useGetData({ endpoint }: { endpoint: string }) {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setError(false)
    apiClient.get(endpoint)
      .then(({ data }) => setData(data.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [endpoint]
  )

  return {
    data,
    error,
    loading,
  }
}

export default useGetData