"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter()

    const handleButton = () => {
        router.push("/login")
    }

    const link = [
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blogs",
            path: "/blogs"
        }
    ]

    if(pathName === "/dashboard"){
        return <div className='bg-yellow-400'>
            Dashboard Layout 
        </div>
    }
    return (
        <div className='bg-orange-600 px-3 py-4'>
            <nav className="flex justify-between">
                <h1>NextJs</h1>
                <li className="flex gap-2">
                    {
                        link?.map(link => <Link key={link.title} className={`${pathName === link.path && "font-bold"}`} href={link.path}>{link.title}</Link>)
                    }
                </li>
                <button onClick={handleButton} className='bg-slate-300 px-2'>Login</button>
            </nav>
        </div>
    );
};

export default Navbar;