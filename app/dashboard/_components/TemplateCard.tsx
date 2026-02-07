import { TEMPLATE } from '@/types'
import Image from 'next/image'
import Link from 'next/link'


const TemplateCard = (item:TEMPLATE) => {
  
  return (
    <div className='bg-[url("/background-splash.svg")]'>
       <Link href={`/dashboard/content/`+ item.slug}>
        <div className='p-5 shadow-md rounded-md  border border-gray-800
     hover:border-pink-700 flex flex-col gap-3 cursor-pointer  transition-all'>
        <Image src={item.icon} alt="icon" height={50} width={50} />
        <h2 className='font-medium text-lg text-white'>{item.name}</h2>
        <p className='text-white/50 line-clamp-2'>{item.desc} </p>
    </div>
    </Link>
    </div>
  )
}

export default TemplateCard