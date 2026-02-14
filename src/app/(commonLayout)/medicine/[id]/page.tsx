
import medicineService from "@/components/modules/medicineService";
import { Button } from "@/components/ui/button";
import MedicineDetailsClient from "./MedicineDetailsClient";
import { Medicine } from "@/types";


export default async function MedicineDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data } = await medicineService.getMedicineById(id);
  const medicine: Medicine | undefined = data;

  if (!medicine) return <p>Medicine not found!</p>;

  return <MedicineDetailsClient medicine={medicine}></MedicineDetailsClient>
}