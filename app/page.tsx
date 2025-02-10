'use client'

import { Button } from "@/components/ui/button";
import { UserButton} from '@clerk/nextjs' 

export default function Home() {
  return (
    <div>
    <UserButton afterSwitchSessionUrl="/"/>
    <div>
      <Button size='lg' variant="default" className="font-extrabold text-4xl">Hello world</Button>
    </div>
    </div>
  );
}
