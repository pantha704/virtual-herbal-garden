import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import React from "react";

export async function SessionProvider({ children }: any) {
  const session = await getServerSession(authOptions);
  return <>{React.cloneElement(children, { session })}</>;
}
