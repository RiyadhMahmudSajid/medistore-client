import CategoryMedicine from "@/components/layout/categorywithmedicine/CategoryMedicine";
import categoryService from "@/components/modules/categoryService";
import { Medicine } from "@/types";



export default async function MedicineDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const { data: category } = await categoryService.getCategoryById(id);

    console.log(category.medicines);

    if (!category) return <p>Category not found!</p>;



    return (
        <div>
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
    );
}