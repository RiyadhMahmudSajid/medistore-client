"use client"

import * as React from "react"
import Link from "next/link"
import categoryService from "./modules/categoryService"
import { Category } from "@/types"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SearchForm } from "@/components/search-form"

interface AppSidebarProps {
  categories: Category[]
}

export function AppSidebar({ categories }: AppSidebarProps) {
  const [search, setSearch] = React.useState("")
  const [data, setData] = React.useState<Category[]>(categories)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true)
      const result = await categoryService.getCategory({ search })
      setData(result)
      setLoading(false)
    }

    fetchCategories()
  }, [search])

  return (
    <Sidebar className="top-16 h-[calc(100vh-4rem)]">
      <SidebarHeader>
        <SearchForm value={search} onChange={setSearch} />
      </SidebarHeader>

      <SidebarContent>
        {loading && (
          <p className="px-4 text-sm text-muted-foreground">Loading...</p>
        )}

        <SidebarMenu>
          {data.map((category) => (
            <SidebarMenuItem key={category.id}>
              <SidebarMenuButton asChild>
                <Link href={`/categoryPost/${category.id}`}>
                  {category.name}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}
