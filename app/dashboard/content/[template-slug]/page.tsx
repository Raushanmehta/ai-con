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

export default async function Page({ params }: PROPS) {
  const resolvedParams = await params

  const selectedTemplate = Templates.find(
    (item) => item.slug === resolvedParams['template-slug']
  )

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Back button */}
      <Link href="/dashboard">
        <Button className="border border-gray-800 bg-black hover:bg-pink-500 mb-4">
          <ArrowLeft className="mr-2" />
          Back
        </Button>
      </Link>

      {/* Responsive layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
        {/* Form */}
        <div className="lg:col-span-1">
          <FormSection selectedTemplate={selectedTemplate} />
        </div>

        {/* Output */}
        <div className="lg:col-span-2">
          <OutputSection />
        </div>
      </div>
    </div>
  )
}