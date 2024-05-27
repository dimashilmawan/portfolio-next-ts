import { Spotlight } from "@/components/ui/spotlights";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-blue-950">
      <Spotlight className="left-64 top-0 h-24 w-24 lg:h-auto  lg:w-24 " />
      <h1 className="text-7xl font-bold text-black">Hello there</h1>
    </main>
  );
}
