import { getSellerReview } from "@/action/reviewAction";
import MyMedReview from "@/components/modules/dashboardComponent/sellerDashboard/MyMedReview";

const MyMedicineReview = async() => {
    const {data} = await getSellerReview()
    console.log(data);
    return (
        <div>
           <MyMedReview medicineReview={data}></MyMedReview>
        </div>
    );
};

export default MyMedicineReview;


