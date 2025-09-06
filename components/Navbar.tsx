"use client"
import React from 'react'
import Logo from "@/components/logo";
import { usePathname } from 'next/navigation';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
function Navbar() {
  return (
  <>   
  <DesktopNavbar />
  </>

  );
  
}

const items = [
    {
        label: "Dashboard", link:"/" },
    { label: "Transactions", link:"/transactions" },
    { label: "Manage", link:"/manage" },
    
];

function DesktopNavbar() {
    return (
        <div className="hidden-separate border-b
        bg-background md:block">
           <nav className="container flex items-center
           justify-between px-8">
            <div className='flex h-[80px] min-h-[60px] '>
                <Logo />
                <div className='flex h-full'>
                    {items.map((item) => (<NavbarItem 
                    key={item.label}
                    link={item.link}
                    label={item.label} />
                ))}
                </div>
            </div>
           </nav>
        </div>
    )
}
function NavbarItem({label, link}: 
    {
    label: string;
    link: string;
}){
    const pathname = usePathname();
    const isActive = pathname === link;
    return (
    <div className='relativec flex items-center'>
        <link href={link} className={
            cn(buttonVariants({variant: "ghost"}),
        "w-full justify-start text-lg text-muted-foreground",
        isActive && "text-foreground"
        )}>
        {label}</link> 
    </div>
    )
    }


export default Navbar;
