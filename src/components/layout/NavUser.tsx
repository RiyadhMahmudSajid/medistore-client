"use client";

import { User, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LogoutButton from "./HomeOther/LogoutButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavUser({ session }: { session: any }) {

  if (!session?.user) {
    return (
      <Button asChild variant="default" size="sm" className="h-9 sm:h-11 px-4 sm:px-6 rounded-lg text-sm font-medium">
        <Link href="/login">Sign In</Link>
      </Button>
    );
  }

  const dashboardLink = session.user.role === 'ADMIN'
    ? '/admindashboard'
    : session.user.role === 'SELLER'
      ? '/sellerdashboard'
      : '/customerdashboard';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 h-10 sm:h-12 px-2 sm:px-4 rounded-xl bg-secondary/50 hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all group outline-none"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background border border-border group-hover:border-primary/30 transition-colors">
            <User className="h-5 w-5 text-primary" />
          </div>
          <div className="hidden sm:flex items-center gap-1 leading-none">
            <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
              {session.user.name.split(" ")[0]}
            </span>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56 p-2 mt-2">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-bold leading-none">{session.user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">{session.user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={dashboardLink}>Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="w-full ml-[0.5rem]">
          <LogoutButton />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}