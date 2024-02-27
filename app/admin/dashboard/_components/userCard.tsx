"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession } from "next-auth/react";
import { ExtendedUser } from "@/next-auth";

export function CardWithForm() {
  const { data: session, status } = useSession();
  const [user, setUser] = React.useState<ExtendedUser | null>(null);

  console.log(session);

  React.useEffect(() => {
    if (session && session.user) {
      const extendedUser: ExtendedUser = {
        ...session.user,
        role: session.user.role, //  ここで適切な値をセットする必要があり
        confirmed: session.user.confirmed, //  同様に、ここで適切な値をセットする必要があり
      };
      setUser(extendedUser);
    }
  }, [session]);

  if (status === "loading") return <div>Loading...</div>;

  console.table(session);

  return (
    <Card className="w-[320px] md:w-[450px]">
      <CardHeader>
        <CardTitle>User Info</CardTitle>
        <CardDescription>your register infomaiton</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="id">Id</Label>
              {user && <Input id="id" value={user.id} readOnly />}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              {user && <Input id="name" value={user.name as string} readOnly />}
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">email</Label>
              {user && (
                <Input id="email" value={user.email as string} readOnly />
              )}
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="role">role</Label>
              {user && <Input id="role" value={user.role} readOnly />}
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
