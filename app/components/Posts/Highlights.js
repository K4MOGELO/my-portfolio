// import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
// import { CardHeader, CardContent, Card } from "@/components/ui/card";
// import {
//   CarouselItem,
//   CarouselContent,
//   CarouselPrevious,
//   CarouselNext,
//   Carousel,
// } from "@/components/ui/carousel";

// export default function Component({ images }) {
//   return (
//     <div className="flex flex-col w-full max-w-2xl mx-auto">
//       <Carousel className="w-full max-w-xs">
//         <CarouselContent>
//           {images.map((imageUrl, index) => (
//             <CarouselItem key={index}>
//               <div className="p-1">
//                 <Card>
//                   <CardHeader className="flex items-center gap-2">
//                     <Avatar className="w-8 h-8 border">
//                       <AvatarImage alt="@user1" src="/placeholder-user.jpg" />
//                       <AvatarFallback>U1</AvatarFallback>
//                     </Avatar>
//                     <span className="text-sm font-semibold">post {index}</span>
//                   </CardHeader>
//                   <CardContent className="flex aspect-square items-center justify-center p-6">
//                     <img
//                       alt={`Story ${index}`}
//                       className="aspect-square object-cover"
//                       height={400}
//                       src={imageUrl}
//                       width={400}
//                     />
//                   </CardContent>
//                 </Card>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         {images.length > 1 && (
//           <>
//             <CarouselPrevious />
//             <CarouselNext />
//           </>
//         )}
//       </Carousel>
//     </div>
//   );
// }
