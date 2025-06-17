"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { signOutAction } from "@/lib/action";

interface AvatarDropdownProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export function AvatarDropdown({ user }: AvatarDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:ring-2 hover:ring-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:focus:ring-offset-gray-900"
      >
        {user.image ? (
          <Image
            src={user.image}
            alt={user.name || "User avatar"}
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />
        ) : (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-sm font-medium text-gray-700 dark:bg-gray-600 dark:text-gray-300">
            {user.name?.[0]?.toUpperCase() ||
              user.email?.[0]?.toUpperCase() ||
              "U"}
          </div>
        )}
      </button>

      {isOpen && (
        <div className="ring-opacity-5 absolute right-0 mt-2 w-fit rounded-md bg-white py-1 shadow-lg ring-1 ring-black dark:bg-gray-800 dark:ring-gray-700">
          <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
            <div className="font-medium">{user.name}</div>
            <div className="text-gray-500 dark:text-gray-400">{user.email}</div>
          </div>
          <hr className="border-gray-200 dark:border-gray-700" />
          <div className="px-4 py-2">
            <form action={signOutAction}>
              <button
                type="submit"
                className="w-full cursor-pointer rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-400"
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
