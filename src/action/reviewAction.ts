'use server'

import { reviewService } from "@/components/modules/reviewService";
import { Review } from "@/types";
import { cookies } from "next/headers";

export const  createReview = async function (review:Review,medicineId:string) {
    try {
        const cookieStore = await cookies();
        const cookieHeader = cookieStore.toString();

        const res = await reviewService.createReview(cookieHeader,review,medicineId);
        
        
        return res;
    } catch (error) {
        return { data: null, error: { message: "Internal Server Error" } };
    }
}