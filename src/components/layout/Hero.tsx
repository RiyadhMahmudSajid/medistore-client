
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { HomeCarouselSpacing } from "./HomeCarosol"
import Getmedicine from "./HomeOther/Getmedicine"

import categoryService from "../modules/categoryService"



export default async function HeroPage() {
  // const getSession = await authClient.getSession()
  // console.log(getSession);
  const { data:categories } = await categoryService.getCategory({
    search:""
  })
 

  return (

    <SidebarProvider >
      <AppSidebar categories={categories || []}/>
      <SidebarInset className="mt-14 border px-8">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Build Your Application</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="">
          <HomeCarouselSpacing></HomeCarouselSpacing>
          <Getmedicine ></Getmedicine>
         
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
