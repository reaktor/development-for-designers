import Image from 'next/image';
import image from "./final_koira.jpeg";
import Logo from "../components/Logo";
import Kela from "../components/Kela";

export default function MyAwesomePage() {
  return (
    <>
      <main>
        <Logo />
        <h1>TITEL HERE</h1>
        <p>welcom to my awoseme home page with lots of stuff</p>
        <Kela />
        <Image
          src={image}
          width={500}
          height={500}
        />
        <marquee behavior="alternate" direction="right">
          Hello
        </marquee>
        <marquee>world</marquee>
        <footer>Here's a footer</footer>
      </main>
    </>
  );
}
