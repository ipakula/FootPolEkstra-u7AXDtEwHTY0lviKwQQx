import React from "react";
import { motion } from "framer-motion";
import { Transition } from "@/components/ui/transition";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <span className="ml-3 text-xl">FootPol Ekstra</span>
          </a>
          <p className="mt-2 text-sm text-gray-600">Transforming the Ekstraklasa football league with cutting-edge technology solutions.</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">ABOUT</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-white">Our Story</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-white">Technology</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-white">Innovation</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">SERVICES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-white">Player Analysis</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-white">Fan Engagement</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-white">Stadium Enhancements</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CONTACT</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-white">Contact Us</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-white">Support</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-white">FAQs</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">FOLLOW US</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-white">Facebook</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-white">Twitter</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-white">Instagram</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-600 text-sm text-center sm:text-left">© 2023 FootPol Ekstra —
            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-500 ml-1" target="_blank">@knyttneve</a>
          </p>
        </div>
      </div>
    </footer>
  );
}