"use client";

import type { ComponentProps } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Search } from "lucide-react";

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="flex gap-4">
      <NavigationMenuItem className="relative ">

        <div className="relative w-full flex  items-center ">



          <button className="absolute left-0 bg-primary h-11 w-12 flex items-center justify-center rounded-l-md hover:opacity-90 transition-opacity">
            <Search className="h-5 w-5 text-primary-foreground" />
          </button>

          <input
            type="text"
            placeholder='Search for "medicine products"'
            className="w-full h-11 pl-20 pr-12 rounded-md bg-secondary border-none focus-visible:ring-2 focus-visible:ring-primary text-sm transition-all"
          />

        </div>

      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);