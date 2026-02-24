// model Reviews {
//   id         String    @id @default(uuid())
//   rating     Int
//   comment    String
//   medicineId String
//   medicine   Medicines @relation(fields: [medicineId], references: [id], onDelete: Cascade)
//   customerId String
//   customer   User      @relation(fields: [customerId], references: [id],onDelete: Cascade)
// }

export interface Review {
    customerId:string,
    rating:number,
    comment:string
    medicineId?:string
}