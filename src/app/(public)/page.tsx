import { auth } from "@/lib/auth";
import { Navbar } from "@/components/navbar";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4">
        <h1 className="mx-auto py-10 text-center text-2xl font-bold">
          SaaS Starter Kit
        </h1>
        {session?.user ? (
          <p className="text-center">Welcome {session.user.name}!</p>
        ) : (
          <div className="text-center">
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Get started with your SaaS application
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
