import React from 'react'
import { Counter } from './Counter'

export { Page }

function Page() {
  let content = `Click on create link in sidebar to create a new camera, and share the link generated with others who want to view your camera remotely.`
  return (
    <>
      <h1>Usage</h1>
      <p>{content}</p>
    </>
  )
}
