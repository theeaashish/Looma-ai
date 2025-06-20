import HomeBackground from "./_components/HomeBackground";
import HomeSection from "./_components/HomeSection";
import NavBar from "./_components/NavBar";

export default function Home() {
  return (
    <main className="relative h-[500vh]">
      <div className="absolute w-full h-screen -z-10">
        <HomeBackground src="./verticle_lines.svg" alt="verticle_lines" />
        <HomeBackground src="./horizontal_lines.svg" alt="verticle_lines" />
        <HomeBackground src="./highlighted_box.svg" alt="verticle_lines" />
        {/* <div className="absolute -bottom-8 h-[80px] bg-gradient-to-b from-black/40 to-black/10 w-full">hey</div> */}
      </div>
      <NavBar />
      <HomeSection />
    </main>
  );
}
