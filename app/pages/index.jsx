import Navi from "../components/Navi";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <>
      <header>
        <Logo />
        <h1>Dev for designers</h1>
        <Navi />
      </header>
      <main>
        <p>Development is like baking buns.</p>
      </main>
    </>
  );
}
