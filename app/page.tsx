import { auth } from "@/auth";
import React from "react";
import HeroImage from "./_components/heroImage";

async function MyAccountPage() {
  const session = await auth();
  console.table(session);

  return (
    <div>
      <HeroImage />
    </div>
  );
}

export default MyAccountPage;
