
import medicineService from "@/components/modules/medicineService";

export default async function MedicineDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  const { data: medicine } = await medicineService.getMedicineById(id);

  if (!medicine) return <p>Medicine not found!</p>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{medicine.name}</h1>
      <p className="text-gray-500">Manufacturer: {medicine.manufacturer}</p>
      <div className="mt-4">
        {/* <img src={medicine.image} alt={medicine.name} className="max-w-md rounded" /> */}
      </div>
      <p className="mt-4">{medicine.description}</p>
      <p className="text-xl font-bold mt-2">Price: ${medicine.price}</p>
    </div>
  );
}