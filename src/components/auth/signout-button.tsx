import { signOut } from "@/lib/auth";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        className="cursor-pointer rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-400"
        type="submit"
      >
        Sign Out
      </button>
    </form>
  );
}
