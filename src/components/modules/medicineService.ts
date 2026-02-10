import { env } from "@/env";
import { error } from "console";


const API_URL = env.NEXT_PUBLIC_API_URL

interface ServiceOption {
    cache?: RequestCache,
    revalidate?: number
}

interface GetmedicineParams {
    search?: string
}
const medicineService = {
    getAllMedicine: async function (params?: GetmedicineParams, option?: ServiceOption) {
        try {

            const url = new URL(`${API_URL}/medicine`)

            if (params) {
                Object.entries(params).forEach(([key, value]) => {
                    if (value !== undefined && value !== null && value !== "") {
                        url.searchParams.append(key, value);
                    }
                })
            }

            const config: RequestInit = {}

            if (option?.cache) {
                config.cache = option.cache
            }
            if (option?.revalidate) {
                config.next = { revalidate: option.revalidate }
            }
            const res = await fetch(url.toString(), config);


            if (!res.ok) return { data: null, error: { message: "Failed to fetch medicine" } };

            const data = await res.json();


            return { data: data, error: null };

        } catch (err) {
            console.error("Medicine fetch error:", err);
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    },

    getMedicineById: async function (MedicineId: string) {
        try {
            const res = await fetch(`${API_URL}/medicine/${MedicineId}`)
            const data = await res.json()
            return { data: data, error: null }
        } catch (err) {
            return { data: null, error: { err } }
        }
    }

};

export default medicineService;