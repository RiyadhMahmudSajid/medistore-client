// export interface BlogPost {
//   id: string | number;
//   title: string;
//   content: string;
//   thumbnail?: string | null;
//   tags?: string[];
//   views: number;
//   _count?: {
//     comments: number;
//   };
//   isFeatured?: boolean;
// }



export interface Medicine {
  id?: string;             
  name: string;            
  description: string;     
  price: number;           
  manufacturer: string;    
  image: string;           
  stock: number;           
  sellerId?: string;        
}