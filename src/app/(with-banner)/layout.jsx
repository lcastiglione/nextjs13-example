import React from 'react'

export default function Postlayout ({ children }) {
  return (
    <div>
      <marquee style={{ background: '#fff', color: 'purple' }}>
        My Banner
      </marquee>
      {children}
    </div>
  )
}
