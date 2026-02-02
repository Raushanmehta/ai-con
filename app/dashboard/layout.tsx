"use client"

import Header from "./_components/Header"
import Sidebar from "./_components/Sidebar"

function layout({children}: Readonly<{children: React.ReactNode}>) { 

  return (
      
    <div>
        <div className='w-64 hidden md:block fixed'>
            <Sidebar/>
        </div>
        <div className='md:ml-64'>
            <Header/>
            {children}
        </div>
    </div>
  )
}

export default layout