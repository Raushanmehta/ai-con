'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

function FormSection() {


  return (
    <div className='p-5 shadow-md border border-gray-800 rounded-lg'>
       
        <Image src={''} alt='icon' height={70} width={70} className='mb-4'/>
        <h2 className='font-bold text-white text-2xl mb-2 '>{'name'}</h2>
        <p className='font-semibold text-gray-500'> {'desc'} </p>
        
        <form className='mt-6'>
         
  <div className='my-2 flex flex-col gap-2 mb-7'>
    <label className='text-xl font-semibold text-white'> Lable</label>
      <Input  
        className='border border-pink-500 py-6'
      />
    
      <Textarea 
        className='border border-pink-500 py-8'
      />
  </div>

         <Button type='submit'
          className='w-full orange-button cursor-pointer bg-pink-500 hover:bg-pink-700 
          py-6'> Get Generate</Button>
        </form>
    </div>
  )
}

export default FormSection