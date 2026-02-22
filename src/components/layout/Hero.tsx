
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
import ServiceHighlights from "./HomeOther/ServiceHighlights"
import HealthGuideSection from "./HomeOther/HealthGuideSection"
import Footer from "./Footer"



export default async function HeroPage() {

  const { data: categories } = await categoryService.getCategory({
    search: ""
  })


  return (

    <SidebarProvider>
  
      <AppSidebar categories={categories || []} />

      <SidebarInset className="flex flex-col min-h-screen">

        <header className="sticky top-16 z-30 flex h-16 shrink-0 items-center gap-2 border-b bg-background/80 backdrop-blur-md px-6">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/">Care Pharmacy</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Home</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>


        <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-10">
          <div className="max-w-7xl mx-auto">
            <HomeCarouselSpacing />
            <Getmedicine />
            <HealthGuideSection />
            <ServiceHighlights />
            <Footer></Footer>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>


  )
}
