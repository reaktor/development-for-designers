import Navi from "../components/Navi";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <h1>Git stuff</h1>
        <Navi />
      </header>
      <main>
        <p>Git is like riding in a limo.</p>
      </main>
      <Footer />
    </>
  );
}
