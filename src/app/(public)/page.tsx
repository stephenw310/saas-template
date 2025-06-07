import { SignIn } from "@/components/auth/signin-button";
import { SignOut } from "@/components/auth/signout-button";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <h1 className="mx-auto py-10 text-center text-2xl font-bold">
        SaaS Template
      </h1>
      {session?.user ? (
        <>
          <p className="text-center">Welcome {session.user.name}!</p>
          <div className="mt-4 flex justify-center">
            <SignOut />
          </div>
        </>
      ) : (
        <div className="flex justify-center">
          <SignIn />
        </div>
      )}
    </div>
  );
}
