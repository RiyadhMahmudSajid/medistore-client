import { env } from "@/env";


const API_URL = env.API_URL

interface GetmedicineParams {
    search?: string
}
const medicineService = {
    getAllMedicine: async function (params?: GetmedicineParams) {
        try {

            const url = new URL(`${API_URL}/medicine`)
            // console.log("url is",url);
            // console.log("url is",url.toString());
         
            if (params) {
                Object.entries(params).forEach(([key, value]) => {
                    if (value !== undefined && value !== null && value !== "") {
                        url.searchParams.append(key, value);
                    }
                })
            }
            const res = await fetch(url.toString());


            if (!res.ok) return { data: null, error: { message: "Failed to fetch medicine" } };

            const data = await res.json();


            return { data: data, error: null };

        } catch (err) {
            console.error("Medicine fetch error:", err);
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    }
};

export default medicineService;