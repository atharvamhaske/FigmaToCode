"use client"
import React from "react"
import { Navbar } from "./components/navbar"
import Hero from "./components/hero"


export default function Home() {
  return(
    <div className="min-h-screen w-full mx-auto absolute z-10 inset-0 bg-cover bg-center bg-[url('/image.png')]">
      <Navbar />
      <Hero />
      
    </div>
  )
}