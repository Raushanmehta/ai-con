import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'

const CreateNewContent = () => {
  return (
    <div className='p-5'>
      <Link href={'/dashboard'}>
        <Button className='border border-gray-800 bg-black  hover:bg-pink-500 cursor-pointer'>
          <ArrowLeft /> Back
        </Button>
      </Link>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-5'>
        {/* Form section */}
        <FormSection/>

        {/* Output section */}
        <div className='col-span-2'>
          <OutputSection />
        </div>
      </div>
    </div>
  )
}

export default CreateNewContent