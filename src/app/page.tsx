import { Button } from "@/components/ui/button";
import Image from "next/image"
import Link from "next/link";
import { FaGithub,FaTwitter,FaLinkedin,FaYoutube} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
export default function HomePage() {
  return <div className=" container h-full  max-w-3xl">
    
    <div className="h-20 "/>
    
<div className="absolute top-0 -z-10 h-full w-full "><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px] "></div></div>
    <div className=" flex flex-col items-center justify-center ">
     <div className="absolute top-20 -z-10 h-[140px] w-[140px] rounded-full  bg-[#fff] opacity-90 blur-[10px]  ">
   

     </div>
     <Image className=" rounded-full   w-[140px] h-[140px]" src={"/Profile.jpg"} alt={""} width={150} height={100}/>
      <div className="text-2xl mt-4 font-extrabold text-primary">Apurva Narayan Pradhan</div>
<div className="mt-2 text-primary/80">Full Stack Web developer </div>
<div className="flex  mt-4 flex-row gap-4 text-2xl">

  
<Link href={"https://x.com/NerdyNarayan"}>
<FaTwitter className="  hover:text-primary/80"/>

</Link>
<Link href={"youtube.com"}>
<FaYoutube className="hover:text-primary/80"/>

</Link>

<Link href={"https://www.linkedin.com/in/apurva-narayan-pradhan/"}>
<FaLinkedin className="hover:text-primary/80"/>
</Link>
<Link href={""}>
<IoIosMail className="hover:text-primary/80"/>
 </Link>


</div>
<div className="flex mt-4 flex-col gap-4">

<Link href={"https://my-portfolio-delta-blue-89.vercel.app"}>
<Button variant={"outline"} className="relative px-[200px] py-6">
<div>
<CgProfile  className="absolute top-3 items-center left-8 text-2xl"/>

  </div>
  <div className="text-xl font-semibold">
  Portfolio
    </div>  
</Button>

</Link>
<Link  href={"https://my-portfolio-delta-blue-89.vercel.app/blog"}>
<Button variant={"outline"} className="w-full relative py-6">
<div>
<ImBlog  className="absolute top-3 items-center left-8 text-2xl"/>

  </div>
  <div className="text-xl font-semibold">
  Blog
    </div>  
</Button>

</Link>


</div>


<div >
  
</div>
    </div>

  </div>
}
