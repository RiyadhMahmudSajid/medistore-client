import * as React from "react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { adminRoutes } from "@/Route/adminRoutes"
import { customerRoutes } from "@/Route/customerRoutes"
import { sellerRoutes } from "@/Route/sellerRoutes"



export function DashboardSidebar({ user, ...props }: { user: { role: string } & React.ComponentProps<typeof Sidebar> }) {


    let routes: any = []
    switch (user.role) {
        case "ADMIN":
            routes = adminRoutes
            break
        case "CUSTOMER":
            routes = customerRoutes
            break 
        case "SELLER":
            routes = sellerRoutes
            break       
        default:
            return <p>No Dashboard</p>;


    }
    return (
        <Sidebar {...props}>
            <SidebarHeader>
                DashBoard
            </SidebarHeader>
            <SidebarContent>
                {/* We create a SidebarGroup for each parent. */}
                {routes.map((item: any) => (
                    <SidebarGroup key={item.title}>
                        <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {item.items.map((item: any) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild >
                                            <Link href={item.url}>{item.title}</Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}
