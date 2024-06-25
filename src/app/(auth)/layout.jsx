import { getSession } from "@/utils/action";
import { redirect } from "next/navigation";
import React from "react";

const AuthLayout = async ({ children }) => {
  const session = await getSession();
  if (session.isLoggedIn) {
    redirect("/");
  }
  return <div>{children}</div>;
};

export default AuthLayout;