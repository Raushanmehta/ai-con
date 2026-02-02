'use client'

import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'

const Header = () => {
  
  return (
    <div className='p-4 flex justify-between border-b border-gray-800'>
      <div className='flex gap-2 items-center p-2 border border-pink-500 text-white rounded-md max-w-lg'>
        <input type="text" placeholder="Search...." className='outline-none' />
        <Search />
      </div>

      <div className='flex items-center gap-5'>
        <h2 className='orange-button rounded-full p-2 px-4 bg-pink-600 hover:bg-pink-700 font-semibold cursor-pointer text-white'>
          <button>JOIN US</button>
        </h2>
        <UserButton />
      </div>
    </div>
  )
}

export default Header
