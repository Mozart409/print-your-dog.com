import React from 'react'
import Footer from './Footer'
function Layout (props) {
  return (
    <div className='flex flex-col min-h-screen font-sans antialiased '>
      <main className='flex-1 w-full p-4 mx-auto max-w-4xl md:px-8'>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
