import { useEffect } from 'react'

export default function Index() {
  useEffect(() => {
    location.replace('/sdin')
  }, [])
  return null
}
