import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { ModeToggle } from "./modeTogol";
import CartCounterWrapper from "./HomeOther/CartCounterWrapper";
import userService from "../modules/userService";
import NavUser from "./NavUser";
import { Suspense } from "react";

async function AuthSection() {
  try {
    const { data } = await userService.getSession();
    return <NavUser session={data} />;
  } catch (error) {
    return <NavUser session={null} />;
  }
}

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b bg-background/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
        
        <Logo />

        <div className="flex items-center gap-2 sm:gap-4">
          <CartCounterWrapper />

          <Suspense fallback={<div className="h-10 w-10 rounded-full bg-muted animate-pulse" />}>
            <AuthSection />
          </Suspense>

          <ModeToggle />
        </div>
      </div>
       <div className="md:hidden max-w-3/12 mx-auto">
          <NavMenu />
        </div>
    </nav>
  );
};

export default Navbar;