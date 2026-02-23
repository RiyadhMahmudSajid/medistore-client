'use server'

import medicineService from "@/components/modules/medicineService";
import { updateTag } from "next/cache";
import { cookies } from "next/headers";

export const deleteMedicineBySeller = async (medicineId:string) => {
    try {

        const cookieStore = await cookies();
        const cookieHeader = cookieStore.toString();

        const res = await medicineService.deleteMedicineBySeller(medicineId, cookieHeader);
        updateTag("myMedicine")

        return res;
    } catch (error) {
        return { data: null, error: { message: "Internal Server Error" } };
    }
}