import { env } from "@/env";

const API_URL = env.NEXT_PUBLIC_API_URL

interface GetCategoryParams {
    search?: string
}
const categoryService = {
    getCategory: async function (params: GetCategoryParams) {
        try {

            const url = new URL(`${API_URL}/categoryPost`)
            if (params) {
                Object.entries(params).forEach(([key, value]) => {
                    if (value !== undefined && value !== null && value !== ""){
                        url.searchParams.append(key,value)
                    }
                })
            }

            console.log(url.toString());

            const result = await fetch(url.toString())
            const data = await result.json()
            return  data

        } catch (err) {
            return { data: null, error: { err } }
        }
    },
    getCategoryById: async function (categoryId: string) {
        try {

            const result = await fetch(`${API_URL}/categoryPost/${categoryId}`)
            const data = await result.json()
            return { data: data, error: null }

        } catch (err) {
            return { data: null, error: { err } }
        }
    }
}

export default categoryService