import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    // সরাসরি Render এর URL এর বদলে আপনার নিজের ডোমেইন (Vercel/Local) ব্যবহার করুন
    // এতে Rewrites এর মাধ্যমে রিকোয়েস্টটি ব্যাকএন্ডে যাবে
    baseURL: typeof window !== "undefined" ? window.location.origin : "http://localhost:3000",
    fetchOptions: {
        credentials: "include"  
    }
})