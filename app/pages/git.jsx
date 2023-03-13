import Navi from "../components/Navi";
import Logo from "../components/Logo";

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
      </main>
    </>
  );
}
