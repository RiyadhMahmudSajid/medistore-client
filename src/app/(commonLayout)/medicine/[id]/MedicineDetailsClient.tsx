"use client"

import { Button } from "@/components/ui/button";
import { useCart } from "@/provider/CartProvider";
import { Medicine } from "@/types";


interface Props {
    medicine: Medicine;
}

const MedicineDetailsClient = ({ medicine }: Props) => {
    const { cart, addToCart, increaseQty, decreaseQty } = useCart();

    const cartItem = cart.find((item) => item.id === medicine.id);

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold">{medicine.name}</h1>
            <p className="text-gray-500">Manufacturer: {medicine.manufacturer}</p>
            <p className="mt-4">{medicine.description}</p>
            <p className="text-xl font-bold mt-2">Price: ${medicine.price}</p>

            <div className="mt-6 flex items-center gap-4">
                {cartItem ? (
             
                    <div className="flex items-center border rounded-lg px-2 bg-secondary">
                        <button
                            onClick={() => decreaseQty(medicine.id!)}
                            className="text-2xl font-bold hover:text-primary px-3 py-1"
                        >
                            −
                        </button>
                        
                        <span className="font-bold text-lg w-8 text-center">
                            {cartItem.quantity}
                        </span>

                        <button
                            onClick={() => increaseQty(medicine.id!)}
                            className="text-2xl font-bold hover:text-primary px-3 py-1"
                        >
                            +
                        </button>
                    </div>
                ) : (
                   
                    <Button
                        variant="default"
                        className="font-bold"
                        onClick={() =>
                            addToCart({
                                id: medicine.id!,
                                name: medicine.name,
                                price: medicine.price,
                            })
                        }
                    >
                        Add to Cart
                    </Button>
                )}
            </div>
        </div>
    );
};

export default MedicineDetailsClient;
