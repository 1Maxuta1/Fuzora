import Image from "next/image"; 
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800']
})

export const FuzoraLogo = () => { 
return (
    <div className="flex flex-col justify-center">
    <div className=" bg-white py-5 px-7 rounded-full mb-4">
        <Image width="130" height="60" src="/fuzora.svg" alt="Fuzora logo"/>
    </div>
    <div className={cn("text-white", font.className)}>
    <p className="text-4xl font-bold mb-1 flex justify-center">F U Z O R A</p>
    <p className="text-xl font-semibold mb-4 flex justify-center ">Let&apos;s stream!</p>
    </div>
    </div>
)
}