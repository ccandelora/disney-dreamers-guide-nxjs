"use client";
import { useState } from 'react';
import Image from 'next/image';
import Dropdown from './Dropdown';

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {

    return (
        <div className={"bg-page-pattern"}>
            <div className={`absolute top-0 left-0 h-screen w-screen bg-none transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
                <div className="flex items-center justify-center filter drop-shadow-md bg-none h-20"> {/*logo container*/}
                </div>
                <div className="flex flex-col ml-5 text-black bg-white">
                    <a className="text-xl font-medium my-4" href="/" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                        Home
                    </a>
                    <a className="text-xl font-normal my-4" href="/magic-kingdom-queue-times" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                        Magic Kingdom Wait Times
                    </a>
                    <a className="text-xl font-normal my-4" href="/epcot-queue-times" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                        Epcot Wait Times
                    </a>
                    <a className="text-xl font-normal my-4" href="/hollywood-studios-queue-times" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                        Hollywood Studios Wait Times
                    </a>
                    <a className="text-xl font-normal my-4" href="/animal-kingdom-queue-times" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                        Animal Kingdom Wait Times
                    </a>
                </div>  
            </div>
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-none px-4 py-4 h-20 items-center text-white">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <a href="/">
                    <Image src="/disney-dreamers-guide-low-resolution-logo-white-on-transparent-background.png" height="200" width="200" alt="Disney Dreamers Guide"></Image>
                </a>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex text-white">
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <Dropdown />
                </div>
            </div>
        </nav>
    )
}