import { env } from "@/env";

const API_URL = env.NEXT_PUBLIC_API_URL

const orderService = {
    getMyOrder: async function (cookieHeader:string) {
        try {
            const res = await fetch(`${API_URL}/order/myOrder`, {
                headers: {
                    "Content-Type": "application/json",

                    ...(cookieHeader && { Cookie: cookieHeader })
                }
               
            });

            const data = await res.json();
            return { data: data, error: null };
        } catch (err) {
            return { data: null, error: { err } };
        }
        
    }
}

export default orderService