"use client"

import { useMemo } from "react"
import Templates from "@/app/(data)/Templates"
import TemplateCard from "./TemplateCard"
import type { TEMPLATE } from "@/types"

type TemplateListSectionProps = {
  userSearchInput: string
}

export default function TemplateListSection({
  userSearchInput,
}: TemplateListSectionProps) {
  const filteredTemplates = useMemo(() => {
    const query = userSearchInput.trim().toLowerCase()

    if (!query) return Templates

    return Templates.filter((template) =>
      template.name.toLowerCase().includes(query)
    )
  }, [userSearchInput])

  if (!filteredTemplates.length) {
    return (
      <div className="py-10 text-center text-gray-500">
        No templates found
      </div>
    )
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-8">
      {filteredTemplates.map((template: TEMPLATE) => (
        <TemplateCard
          key={template.slug}
          {...template}
        />
      ))}
    </section>
  )
}
