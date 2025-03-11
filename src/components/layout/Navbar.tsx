import React from "react";
import { motion } from "framer-motion";
import { Transition } from "@/components/ui/transition";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="block lg:hidden h-8 w-auto" src="/logo-mobile.svg" alt="FootPol Ekstra" />
              <img className="hidden lg:block h-8 w-auto" src="/logo.svg" alt="FootPol Ekstra" />
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden lg:block">
              <a href="#" className="ml-10 mr-4 font-medium text-gray-900 hover:text-gray-900">Home</a>
              <a href="#" className="mr-4 font-medium text-gray-900 hover:text-gray-900">About</a>
              <a href="#" className="font-medium text-gray-900 hover:text-gray-900">Contact</a>
            </div>
            <button className="lg:hidden flex-shrink-0 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300">
              <svg className="h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}