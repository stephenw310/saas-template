import { signIn } from "@/lib/auth";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <button
        className="cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-400"
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
}
