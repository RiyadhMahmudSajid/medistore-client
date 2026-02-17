import { AppSidebar } from "@/components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { DashboardSidebar } from "@/components/ui/dashboard-sidebar"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page({ admindashboard, customerdashboard, sellerdashboard }: { admindashboard: React.ReactNode; customerdashboard: React.ReactNode; sellerdashboard: React.ReactNode }) {

    const userInfo = {
        role: "ADMIN"
    }
    return (
        <SidebarProvider>
            <DashboardSidebar user={userInfo}></DashboardSidebar>
            <SidebarInset>
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
                <div>
                    {
                        userInfo.role === "ADMIN"
                            ? admindashboard
                            : userInfo.role === "SELLER"
                                ? sellerdashboard
                                : customerdashboard
                    }

                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
