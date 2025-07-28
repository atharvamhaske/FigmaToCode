import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.svg"


export const Navbar = () => {

    const Links = [
        {
            href: "/home",
            title: "Home"
        }, {
            href: "/about",
            title: "About"
        }, {
            href: "/blog",
            title: "Blog"
        }, {
            href: "/contact",
            title: "Contact"
        }]
    return (
        <div className="flex justify-between items-center mt-8 mx-auto max-w-7xl bg-neutral-100/20 px-4 py-3 rounded-full border border-zinc-100/20 font-satoshi">
            <Link href="/" className="font-bold flex-shrink-0">
                <Image src={logo} alt="company logo"></Image>
            </Link>
            <div className="md:flex items-center gap-4 flex-1 justify-center hidden ">
                {Links.map((link, index) => (
                    <Link 
                        href={link.href} 
                        key={index}
                        className="font-medium text-gray-700 hover:text-black transition-colors duration-200 whitespace-nowrap"
                    >
                        {link.title}
                    </Link>
                ))}
            </div>
            <button className="bg-black text-white font-medium tracking-wider px-4 py-2 rounded-full flex-shrink-0 text-sm h-8 flex items-center hover:bg-gray-800 transition-colors">
                Sign up
            </button>
        </div>
    )
}