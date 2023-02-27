import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import { useFetch } from './useFetch'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const { loading, dataGotten } = useFetch(url)

  return <main>{loading ? <Loading /> : <Tours data={dataGotten} />}</main>
}

export default App
