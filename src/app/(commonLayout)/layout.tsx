import Navbar from "@/components/layout/navbar"
import { Suspense } from "react"



const layout = ({ children }: { children: React.ReactNode }) => {
   return (
     <div>
      <Suspense fallback={<div className="h-16 bg-background animate-pulse" />}>
        <Navbar></Navbar>
      
      </Suspense>
       <main className="mt-16">
        {children}
      </main>
   
    
    </div>
   )
}

export default layout