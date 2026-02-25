import { getReview } from "@/action/reviewAction";
import AllReview from "@/components/modules/dashboardComponent/adminDashboard/AllReview";

const GeaAllReview = async() => {
    const {data:Review} = await getReview()
   
    return (
        <div>
           <AllReview  review={Review}></AllReview>
        </div>
    );
};

export default GeaAllReview;