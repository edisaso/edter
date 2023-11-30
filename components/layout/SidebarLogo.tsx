import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";

import Icon from '@/public/favicon.ico'

const SidebarLogo = () => {
  const router = useRouter();
  
  return (
    <div 
      onClick={() => router.push('/')}
      className="
        rounded-full 
        h-14
        w-14
        p-4 
        flex 
        items-center 
        justify-center 
        hover:bg-orange-600 
        hover:bg-opacity-10 
        cursor-pointer
    ">
      <BsTwitter size={28} color="FF6600" />
    </div>
  );
};

export default SidebarLogo;
