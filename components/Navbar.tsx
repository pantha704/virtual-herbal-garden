"use client";
import React from "react";
import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

const Navbar = ({ session }) => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-black text-white">
      <div className="font-bold text-lg">{/* Add logo or text */}</div>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-green-400">
          HOME
        </a>
        <a href="#" className="hover:text-green-400">
          PRODUCTS
        </a>
        <a href="#" className="hover:text-green-400">
          SERVICE
        </a>
        <a href="#" className="hover:text-green-400">
          PAGES
        </a>
      </div>
      {session?.user ? (
        <Button
          variant="default"
          onClick={() => signOut()}
          className="px-4 py-2 rounded-md hover:text-green-400"
        >
          LOG OUT
        </Button>
      ) : (
        <div className="flex">
          <Button
            variant="default"
            onClick={() => signIn()}
            className="px-4 py-2 rounded-md hover:text-green-400"
          >
            LOG IN
          </Button>
          <Button
            variant="secondary"
            onClick={() => signIn()}
            className="ml-2px-4 py-2 rounded-md"
          >
            SIGN UP
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
