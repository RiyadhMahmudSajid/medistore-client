"use client";

import { useCart } from "@/provider/CartProvider";
import { useForm } from "@tanstack/react-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const CheckoutPage = () => {
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
        const res = await fetch("http://localhost:5000/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cart,
            addressData: value,
          }),
          credentials: "include",
        });

        const data = await res.json();

        if (data?.GatewayPageURL) {
          toast.success("Redirecting to payment...", { id: toastId });
          window.location.href = data.GatewayPageURL;
        } else {
          toast.error("Checkout failed", { id: toastId });
        }
      } catch (error) {
        toast.error("Something went wrong", { id: toastId });
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
