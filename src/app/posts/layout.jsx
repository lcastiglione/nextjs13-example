import React from 'react'

export default function Postlayout ({ children }) {
  return (
    <div>
      <small>
        Home &bull; Posts
      </small>
      {children}
    </div>
  )
}
