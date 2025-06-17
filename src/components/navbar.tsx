import Link from "next/link";
import { SignIn } from "@/components/auth/signin-button";
import { AvatarDropdown } from "@/components/avatar-dropdown";
import { auth } from "@/lib/auth";

export async function Navbar() {
  const session = await auth();

  return (
    <nav className="border-b border-gray-200 bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          MySaaS
        </Link>

        <div className="flex items-center gap-4">
          {session?.user ? (
            <AvatarDropdown user={session.user} />
          ) : (
            <>
              <Link
                href="/signup"
                className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Sign up
              </Link>
              <SignIn />
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
