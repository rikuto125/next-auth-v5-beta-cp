import React from "react";
import { CardWithForm } from "./_components/userCard";
import { auth } from "@/auth";

async function MyDashboardPage() {
  const session = await auth();

  return (
    <div className="container flex  justify-center p-4 md:p-8 lg:p-16">
      <CardWithForm />
    </div>
  );
}

export default MyDashboardPage;
