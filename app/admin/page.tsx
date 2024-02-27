// /admin
import { auth } from "@/auth";
import React from "react";

async function MyAccountPage() {
  const session = await auth();

  return <div>MyAccountAdminPage</div>;
}

export default MyAccountPage;
