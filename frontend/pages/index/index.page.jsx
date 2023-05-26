import React from 'react'
import { Counter } from './Counter'

export { Page }
// Use markdown

function Page() {
  let usageContent = `Indeed life is sad, Visit Create page; Create a camera. Visit the link generated to view your camera`
  return (
    <>
      <h1>Usage</h1>
      <p>{usageContent}</p>
    </>
  )
}
