'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { TEMPLATE } from "@/types"
import Image from "next/image"

interface PROPS {
  selectedTemplate?: TEMPLATE
}


function FormSection({selectedTemplate}:PROPS) {
 

  return (
    <div className='p-5 w-full shadow-md border border-gray-800 rounded-lg'>
       
        {selectedTemplate?.icon && (
        <Image
          src={selectedTemplate?.icon}
          alt="icon"
          height={70}
          width={70}
          className="mb-4"
        />
      )}

        <h2 className=' text-white text-2xl mb-2 font-Ove'>{selectedTemplate?.name}</h2>
        <p className='font-Ove text-gray-500'> {selectedTemplate?.desc} </p>
        
        <form className='mt-6'>
         
  <div className='my-2 flex flex-col gap-2 mb-7'>
    <label className='text-xl font-semibold text-white'> Lable</label>
      <Input  
        className='border border-pink-500 py-6 text-white'
      />
    
      <Textarea 
        className='border border-pink-500 py-8 text-white'
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