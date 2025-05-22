"use client";
import { useLayout } from '@/ruta/rutas';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
interface Props{
    children: React.ReactNode;
}
export default function principal({children}: Props) {
   const pathname = usePathname();
    const { title, routes } = useLayout(pathname);
  return (
   <main className="">
    <div className=" flex gap-6 items-center justify-center bg-amber-50 rounded-b-full   px-50 ">
    <img src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-logo-medical-laboratory-observer-vector-png-image_5215540.jpg"
        alt="logo" width={150} height={150}  /> 
    <div className='flex flex-col items-center'> <nav >
              <ul className="flex gap-10">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    className={`${
                      pathname === route.path
                        ? "text-blue-400"
                        : "text-gray-950"
                    } font-semibold capitalize
                     text-lg`}
                    href={route.path}
                  >
                    {route.name}
                  </Link>
                ))}
              </ul>
            </nav> </div>    
    </div>
    {children}
  </main>
  )
}
