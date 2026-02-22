// components/modules/dashboardComponent/sellerDashboard/GetAllMedBySell.tsx

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Medicine } from "@/types"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, Eye } from "lucide-react" // আইকন ব্যবহারের জন্য
import { Badge } from "@/components/ui/badge"

export function GetMyMedicine({ medicines }: { medicines: Medicine[] }) {
  return (
    <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
      <Table>
        <TableCaption className="pb-4">A list of your added medicines.</TableCaption>
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead className="font-bold">Medicine Name</TableHead>
            <TableHead className="font-bold">Price</TableHead>
            <TableHead className="font-bold">Stock Status</TableHead>
            <TableHead className="font-bold">Manufacturer</TableHead>
            <TableHead className="text-right font-bold">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {medicines?.map((item) => (
            <TableRow key={item.id} className="hover:bg-muted/30 transition-colors">
              <TableCell className="font-medium">
                <div className="flex flex-col">
                   <span>{item.name}</span>
                   <span className="text-[10px] text-muted-foreground uppercase tracking-tighter">ID: {item.id.slice(-6)}</span>
                </div>
              </TableCell>
              <TableCell className="font-semibold text-primary">
                ${item.price}
              </TableCell>
              <TableCell>
                {item.stock > 0 ? (
                  <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100 border-none">
                    In Stock ({item.stock})
                  </Badge>
                ) : (
                  <Badge variant="destructive" className="animate-pulse">
                    Out of Stock
                  </Badge>
                )}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {item.manufacturer}
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  {/* View Button */}
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Eye className="h-4 w-4 text-blue-500" />
                  </Button>
                  
                  {/* Update Button */}
                  <Button variant="outline" size="icon" className="h-8 w-8 border-amber-200 bg-amber-50 hover:bg-amber-100">
                    <Edit className="h-4 w-4 text-amber-600" />
                  </Button>

                  {/* Delete Button */}
                  <Button variant="outline" size="icon" className="h-8 w-8 border-red-200 bg-red-50 hover:bg-red-100">
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}