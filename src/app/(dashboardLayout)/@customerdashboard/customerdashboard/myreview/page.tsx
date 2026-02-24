
import { CreateReview } from "@/components/modules/dashboardComponent/customerDashboard/CreateReview";
import orderService from "@/components/modules/orderService";
import userService from "@/components/modules/userService";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


const MyReview = async () => {
    const { data } = await userService.getSession()

    console.log("id id", data.user.id);
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();
    const {data:order} = await orderService.getMyOrder(cookieHeader)
    console.log("order is",order);
    if (!data?.user) {
        redirect("/login")
    }
    return (
        <div>
            <CreateReview customerId={data.user.id} order = {order}></CreateReview>
            
        </div>
    );
};

export default MyReview;