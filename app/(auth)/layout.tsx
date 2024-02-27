import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { Noto_Sans_JP } from "next/font/google";

const font = Noto_Sans_JP({ subsets: ["latin"], weight: ["600"] });

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="container flex flex-col justify-center gap-x-12 py-4 lg:py-6 h-full p-4 md:p-32 lg:p-64">
      <h1 className={cn("text-3xl font-semibold text-center", font.className)}>
        welcome to the app
      </h1>
      {children}
    </main>
  );
};

export default AuthLayout;
