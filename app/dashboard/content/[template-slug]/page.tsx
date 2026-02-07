import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import Templates from '@/app/(data)/Template'


interface PROPS {
  params: Promise<{
    'template-slug': string
  }>
}
export default async function Page  ({ params }: PROPS) {

  const resolvedParams = await params

  const filterTemplate = Templates?.filter(
    (item) => item.slug === resolvedParams['template-slug']
  )

  
  return (
    <div className="p-5">
      <Link href="/dashboard">
        <Button className="border border-gray-800 bg-black hover:bg-pink-500">
          <ArrowLeft /> Back
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">
        <FormSection  selectedTemplate={filterTemplate[0]} />

        <div className="col-span-2">
          <OutputSection />
        </div>
      </div>
    </div>
  )
}
