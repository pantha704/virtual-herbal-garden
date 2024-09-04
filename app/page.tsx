import { SessionProvider } from "../components/SessionProvider";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <SessionProvider>
      {({ session }: any) => (
        <div className="min-h-screen">
          <Navbar session={session} />
          <HeroSection />
        </div>
      )}
    </SessionProvider>
  );
}
