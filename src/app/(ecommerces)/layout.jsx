import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { getSession } from "@/utils/action";
import prisma from "@/utils/connection";
import React from "react";

const EcommerceLayout = async ({ children }) => {
  const category = await prisma.Category.findMany();
  const session = await getSession();
  return (
    <div>
      <Toaster />
      <Header categories={category} session={session} />
      {children}
    </div>
  );
};

export default EcommerceLayout;