import { Medicine } from "@/types";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
const CategoryMedicine = ({ medicine }: { medicine: Medicine }) => {
    return (
        <Card className="mx-auto w-full max-w-sm overflow-hidden">
            {/* Image section */}
            <div className="relative aspect-[4/3] w-full">
                {/* <Image
          src={medicine.image}
          alt={medicine.name}
          fill
          className="object-cover"
        /> */}
            </div>

            <CardHeader>
                <CardAction>
                    <Badge variant="secondary">Medicine</Badge>
                </CardAction>

                <CardTitle className="text-lg">
                    {medicine.name}
                </CardTitle>

                <CardDescription className="line-clamp-2">
                    {medicine.description}
                </CardDescription>

                <p className="text-sm text-muted-foreground">
                    Manufacturer: <span className="font-medium">{medicine.manufacturer}</span>
                </p>

                <p className="text-lg font-semibold text-primary">
                    ৳ {medicine.price}
                </p>
            </CardHeader>

            <CardFooter>
                <Button className="w-full">Add to Cart</Button>
            </CardFooter>
        </Card>
    );
};

export default CategoryMedicine;