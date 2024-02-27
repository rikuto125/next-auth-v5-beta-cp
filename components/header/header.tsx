import { NavigationDemo } from "./navigation-demo";
import { signOut } from "@/auth";
import { Button } from "../ui/button";
import { auth } from "@/auth";
import Link from "next/link";

export default async function Header() {
  const session = await auth();

  return (
    <div className="bg-gray-100">
      <div className="flex justify-between">
        <div className="p-4">
          <NavigationDemo />
        </div>
        {session ? (
          <div className="p-4">
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <Button variant={"outline"} type="submit">
                Sign Out
              </Button>
            </form>
          </div>
        ) : (
          <div className="p-4">
            <Link href="/sign-in">
              <Button variant={"outline"}>Sign In</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
