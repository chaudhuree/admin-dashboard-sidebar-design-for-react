import React from 'react'

export default function AppWrapper({children}) {
  return (
   <div className="app-wrapper">
  <div className="app-content pt-3 p-md-3 p-lg-4">
   <div> {children}</div>
  </div>
</div>

  )
}
