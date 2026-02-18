import { redirect } from "next/navigation"
import { CreateMedicineForm } from "@/components/modules/dashboardComponent/sellerDashboard/CreateMedicine"
import userService from "@/components/modules/userService"


const CreateMedicine = async () => {

  const { data } = await userService.getSession()

console.log("id id",data.user.id);
  if (!data?.user) {
    redirect("/login")
  }

  return (
    <div>
      <CreateMedicineForm sellerId={data.user.id} />
    </div>
  )
}

export default CreateMedicine
