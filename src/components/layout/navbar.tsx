
import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import { ChevronDown, ShoppingCart, User } from "lucide-react";
import { ModeToggle } from "./modeTogol";
import Link from "next/link";

import { Button } from "../ui/button";
import CartCounterWrapper from "./HomeOther/CartCounterWrapper";


const Navbar = () => {


  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur-md shadow-sm">

      <div className="max-w-11/12 mx-auto flex h-16 items-center justify-between px-4 sm:px-6">


        <div className="">
          <Logo  />
        </div>


        <div className="hidden md:flex flex-1 justify-center px-8 ">
          <NavMenu  />
        </div>


        <div className="flex items-center gap-1 sm:gap-3">
          <CartCounterWrapper></CartCounterWrapper>
          <Button
            variant="ghost"
            className="hidden sm:flex items-center gap-3 h-12 px-4 rounded-xl bg-secondary/50 hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all group"
          >
            {/* User Icon Container */}
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background border border-border group-hover:border-primary/30 transition-colors">
              <User className="h-5 w-5 text-primary" />
            </div>

            {/* Text Section */}
            <div className="flex items-center justify-center gap-1 leading-none">
          
              <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
               <Link href='/login'> Sign In</Link>
              </span>
              <ChevronDown></ChevronDown>
            </div>
          </Button>

          <ModeToggle></ModeToggle>


          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>


      <div className="md:hidden px-4 pb-3 flex justify-center w-full">
        <div >
          <NavMenu/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;