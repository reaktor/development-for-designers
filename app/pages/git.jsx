import Navi from "../components/Navi";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import ImageCard from "../components/ImageCard";
import vimImage from "../images/how-to-close-vim.jpg";
import expertCow from "../images/expert.jpg";

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
        <ImageCard image={vimImage} text="Take it easy and just remember to refer to this if you are stuck in vim." />
        <ImageCard image={expertCow} text="This is the real expert Cow!" />
      </main>
      <Footer />
    </>
  );
}
