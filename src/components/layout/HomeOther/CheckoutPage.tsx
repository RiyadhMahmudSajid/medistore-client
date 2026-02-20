"use client";

import { useCart } from "@/provider/CartProvider";
import { useForm } from "@tanstack/react-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { env } from "@/env";

type Props = {
    user: string
}

const API_URL = env.NEXT_PUBLIC_API_URL

const CheckoutPage = ({ user }: Props) => {
    const { cart } = useCart();

    const form = useForm({
        defaultValues: {
            fullName: "",
            phone: "",
            city: "",
            area: "",
        },
        onSubmit: async ({ value }) => {
            const toastId = toast.loading("Processing order...");
            try {

                const addressRes = await fetch(`${API_URL}/address`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        fullName: value.fullName,
                        phone: value.phone,
                        city: value.city,
                        area: value.area,
                        userId: user,
                    }),
                });

                const addressData = await addressRes.json();
                console.log(addressData);
                console.log("cart is", cart);

                if (!addressRes.ok) {
                    throw new Error("Address creation failed");
                }


                const orderRes = await fetch(`${API_URL}/order`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({

                        items: cart.map((item: any) => ({
                            medicineId: item.id,
                            quantity: item.quantity,
                            price: item.price
                        })),
                        addressId: addressData.id,
                        totalPrice: cart.reduce((acc: number, item: any) => acc + (item.price * item.quantity), 0)
                    }),
                })

                const orderData = await orderRes.json();

                if (!orderRes.ok) {
                    throw new Error("Order creation failed");
                }

                // ৩️⃣ Payment URL পেয়ে redirect
                if (orderData.paymentUrl) {
                    toast.success("Redirecting to payment...", { id: toastId });
                    window.location.href = orderData.paymentUrl;
                } else {
                    toast.error("Payment initiation failed", { id: toastId });
                }

            } catch (error: any) {
                toast.error(error.message || "Something went wrong", {
                    id: toastId,
                });
            }
        },
    });

    return (
        <div className="max-w-md mx-auto space-y-4">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    form.handleSubmit();
                }}
                className="space-y-3"
            >
                <form.Field
                    name="fullName"
                    validators={{
                        onChange: ({ value }) =>
                            !value ? "Full name is required" : undefined,
                    }}
                >
                    {(field) => (
                        <div>
                            <Input
                                placeholder="Full Name"
                                value={field.state.value}
                                onChange={(e) =>
                                    field.handleChange(e.target.value)
                                }
                            />
                            {field.state.meta.errors?.[0] && (
                                <p className="text-red-500 text-sm">
                                    {field.state.meta.errors[0]}
                                </p>
                            )}
                        </div>
                    )}
                </form.Field>

                <form.Field
                    name="phone"
                    validators={{
                        onChange: ({ value }) =>
                            !value ? "Phone is required" : undefined,
                    }}
                >
                    {(field) => (
                        <div>
                            <Input
                                placeholder="Phone"
                                value={field.state.value}
                                onChange={(e) =>
                                    field.handleChange(e.target.value)
                                }
                            />
                            {field.state.meta.errors?.[0] && (
                                <p className="text-red-500 text-sm">
                                    {field.state.meta.errors[0]}
                                </p>
                            )}
                        </div>
                    )}
                </form.Field>

                <form.Field name="city">
                    {(field) => (
                        <Input
                            placeholder="City"
                            value={field.state.value}
                            onChange={(e) =>
                                field.handleChange(e.target.value)
                            }
                        />
                    )}
                </form.Field>

                <form.Field name="area">
                    {(field) => (
                        <Input
                            placeholder="Area"
                            value={field.state.value}
                            onChange={(e) =>
                                field.handleChange(e.target.value)
                            }
                        />
                    )}
                </form.Field>

                <Button type="submit" className="w-full">
                    Confirm & Pay
                </Button>
            </form>
        </div>
    );
};

export default CheckoutPage;