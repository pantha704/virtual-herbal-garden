import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function SessionProvider({ children }: any) {
  const session = await getServerSession(authOptions);
  return children({ session });
}
