import medicineService from "@/components/modules/medicineService";

import { Medicine } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"

import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";





const Getmedicine = async () => {

    const { data } = await medicineService.getAllMedicine({
        search:""
    },{revalidate:10})
    console.log(data);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {
                data?.AllMedicine?.slice(0, 6).map((medicine: Medicine) => (

                    <div key={medicine.id}>
                        <Card className="relative mx-auto w-full max-w-sm pt-0">
                            {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35" /> */}

                            <CardHeader>
                                <CardAction>
                                    <Badge variant="secondary">{medicine.name}</Badge>
                                </CardAction>
                                <CardTitle>{medicine.manufacturer}</CardTitle>
                                <CardDescription>
                                    {medicine.description}
                                </CardDescription>
                                <div className="font-bold">{medicine.price}</div>
                            </CardHeader>
                            <CardFooter className="flex justify-between">
                                <Link href={`/medicine/${medicine.id}`}>

                                <Button className="flex-1">View Event</Button>
                                </Link>
                                
                            </CardFooter>
                        </Card>

                    </div>
                ))

            }
        </div>
    );
}

export default Getmedicine;


{/* <MedicineCard key={medicine.id} medicine={medicine}></MedicineCard> */ }