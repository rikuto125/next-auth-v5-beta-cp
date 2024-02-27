import { signIn } from "@/auth";
import { Button } from "../ui/button";

export default async function SignInButton() {
  return (
    <Button size="sm" onClick={() => signIn("credentials")}>
      Sign In
    </Button>
  );
}
