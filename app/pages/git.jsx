import Navi from "../components/Navi";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import ImageCard from "../components/ImageCard";

export default function Home() {
  return (
    <>
      <header>
        <Logo />
        <h1>Git stuff</h1>
        <Navi />
      </header>
      <main>
        <p>Git is like riding in a limo.</p>
        <ImageCard />
      </main>
      <Footer />
    </>
  );
}
