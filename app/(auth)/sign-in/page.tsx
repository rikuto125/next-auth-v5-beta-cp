import React from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { SignInForm } from "../_components/sign-in-form";
import { cn } from "@/lib/utils";

function SignInPage() {
  return (
    <div>
      <h1 className={cn("text-3xl font-semibold text-center m-2")}>
        Comany Login Page
      </h1>
      <SignInForm />
      <Link
        className={buttonVariants({
          variant: "link",
          size: "sm",
          className: "mt-4",
        })}
        href={"/sign-up"}
      >
        新規登録はこちら
      </Link>
    </div>
  );
}

export default SignInPage;
