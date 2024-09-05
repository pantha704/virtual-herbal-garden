import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="min-h-screen">
      <Navbar session={session} />
      <HeroSection />
    </div>
  );
}
