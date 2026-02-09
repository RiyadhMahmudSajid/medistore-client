import { NextRequest, NextResponse } from "next/server";

import { Roles } from "./constants/roles";
import userService from "./components/modules/userService";

export const proxy = async(request: NextRequest) => {
    console.log("Hello Prox",request.url);
    const path = request.nextUrl.pathname;
    console.log(path);
    let isAuthenticated = false;
    let isAdmin = false;
    const {data} = await userService.getSession()
    console.log(data);
    if(data){
      isAuthenticated =  true;
      isAdmin = data.user.role === Roles.admin;
    }

    if(!isAuthenticated){
      return NextResponse.redirect(new URL("/login",request.url))
    }
    if(isAdmin && path.startsWith("/dashboard")){
      return NextResponse.redirect(new URL("/admin-dashboard",request.url))
    }
    if(!isAdmin && path.startsWith("/admin-dashboard")){
      return NextResponse.redirect(new URL("/dashboard",request.url))
    }

    return NextResponse.next()
};

export const config = {
  matcher: ["/dashboard","/dashboard/:path*","/admin-dashboard","/admin-dashboard/:path*"],
}

export default proxy;