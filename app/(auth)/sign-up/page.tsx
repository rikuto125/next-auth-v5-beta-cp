import React from "react";
import { SignUpForm } from "../_components/sign-up-form";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

function SignUpPage() {
  return (
    <div>
      <h1 className={cn("text-3xl font-semibold text-center m-2")}>
        Comany Rgister Page
      </h1>
      <SignUpForm />
      <Link
        className={buttonVariants({
          variant: "link",
          size: "sm",
          className: "mt-4",
        })}
        href={"/sign-in"}
      >
        登録済みの方はこちら
      </Link>
    </div>
  );
}

export default SignUpPage;
