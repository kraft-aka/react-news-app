import React from 'react'
import { useParams } from 'react-router-dom'

const NewsPage = (props) => {
  const {id} = useParams()
  return (
    <div>NewsPage</div>
  )
}

export default NewsPage