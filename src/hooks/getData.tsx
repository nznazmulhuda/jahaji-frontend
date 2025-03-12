"use client"

import apiClient from '@/utils/axiosInstance'
import axios from 'axios'
import { useEffect, useState } from 'react'

function getData({ endpoint }: { endpoint: string }) {
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

export default getData