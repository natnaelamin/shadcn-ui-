
import Left from "@/components/left";
import Middle from "@/components/middle";
import Right from "@/components/right";



export default function Home() {
  return (
    <div className="mt-5 px-10 py-5 rounded-xl border-2 grid grid-cols-3 gap-5"> 
      <Left />
      <Middle />
      <Right />
    </div>  
  );
}
