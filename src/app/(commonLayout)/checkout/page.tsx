import CheckoutPage from "@/components/layout/HomeOther/CheckoutPage";
import userService from "@/components/modules/userService";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const {data} = await userService.getSession()
  console.log(data);


  if (!data.session) {
    redirect("/login");
  }

  if (data.user.role !== "CUSTOMER") {
    redirect("/");
  }

  return (
    <CheckoutPage user={data.user.id} ></CheckoutPage>
  );
}
