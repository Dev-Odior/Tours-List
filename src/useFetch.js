import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [dataGotten, setDataGotten] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    setLoading(true)

    try {
      const response = await fetch(url)
      const data = await response.json()
      setDataGotten(data)
      console.log(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [url])

  return { dataGotten, loading }
}
