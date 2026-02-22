"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/provider/CartProvider";
import { Medicine } from "@/types";
import { ShoppingCart } from "lucide-react";

interface Props {
  medicine: Medicine;
}

const MedicineDetailsClient = ({ medicine }: Props) => {
  const { cart, addToCart, increaseQty, decreaseQty } = useCart();
  const cartItem = cart.find((item) => item.id === medicine.id);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
  
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={medicine.image || "/placeholder.png"}
            alt={medicine.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

 
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">
            {medicine.name}
          </h1>

          <p className="text-muted-foreground text-lg">
            Manufacturer: <span className="font-medium">{medicine.manufacturer}</span>
          </p>

          <p className="text-gray-600 leading-relaxed">
            {medicine.description}
          </p>

          <div className="text-3xl font-bold text-green-600">
            ৳ {medicine.price}
          </div>


          <div className="pt-4">
            {cartItem ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => decreaseQty(medicine.id!)}
                    className="px-4 py-2 text-xl font-bold hover:bg-gray-100 transition"
                  >
                    −
                  </button>

                  <span className="px-6 py-2 font-semibold text-lg">
                    {cartItem.quantity}
                  </span>

                  <button
                    onClick={() => increaseQty(medicine.id!)}
                    className="px-4 py-2 text-xl font-bold hover:bg-gray-100 transition"
                  >
                    +
                  </button>
                </div>

                <Button
                  className="rounded-xl px-6 py-3 text-base"
                  onClick={() => increaseQty(medicine.id!)}
                >
                  Add More
                </Button>
              </div>
            ) : (
              <Button
                size="lg"
                className="rounded-xl px-8 py-6 text-lg shadow-md"
                onClick={() =>
                  addToCart({
                    id: medicine.id!,
                    name: medicine.name,
                    price: medicine.price,
                  })
                }
              >
               <ShoppingCart></ShoppingCart> Add to Cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetailsClient;