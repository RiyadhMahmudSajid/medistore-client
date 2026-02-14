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
import { useQuery } from "@tanstack/react-query"

interface AppSidebarProps {
  categories: Category[]
}

export function AppSidebar({ categories }: AppSidebarProps) {
  const [search, setSearch] = React.useState("")



  const { data = []  } = useQuery({
    queryKey: ["categories", search],
    queryFn: () => categoryService.getCategory({ search }),
     
    initialData: categories,
  
  })

   console.log("data is",data)

  
  return (
    <Sidebar className="top-16 h-[calc(100vh-4rem)]">
      <SidebarHeader>
        <SearchForm value={search} onChange={setSearch} />
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {data?.map((category: Category) => (
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
