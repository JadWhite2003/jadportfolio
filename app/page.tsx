import ThemeToggler from "@/components/Helper/ThemeToggler";
import Hero from "@/components/Hero";
import Image from "next/image";
import About from "./about/page";
import ProjectsPage from "./projects/page";

export default function Home() {
  return (
    <main className="relative overflow-hidden w-full min-h-screen">
      <div className="w-full ">
        <Hero />
      </div>
    </main>
  );
}
