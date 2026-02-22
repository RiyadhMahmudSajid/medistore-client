
import CategoryMedicine from "@/components/layout/categorywithmedicine/CategoryMedicine";
import categoryService from "@/components/modules/categoryService";

import { Medicine } from "@/types";




export default async function MedicineDetailsPage({params,}: {params: Promise<{ id: string }>;}) {
    const { id } = await params;

    const { data: category } = await categoryService.getCategoryById(id);

    console.log(category.medicines);

    if (!category) return <p>Category not found!</p>;


    return (
       <div className="max-w-7xl mx-auto ">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {category.medicines?.length > 0 ? (
                category.medicines.map((medicine: Medicine) => (
                    <CategoryMedicine
                        key={medicine.id}
                        medicine={medicine}
                    />
                ))
            ) : (
                <p>No medicines found</p>
            )}

        </div>
       </div>
    );
}