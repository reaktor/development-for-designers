import image from "./final_koira.jpeg";
import Logo from "../components/Logo";

export default function MyAwesomePage() {
  let a = undefined;

  function b() {
    if (a) {
      return <p>your anssi kela name is {a} Kela</p>;
    }
  }
  return (
    <>
      <main>
        <Logo />
        <h1>TITEL HERE</h1>
        <p>welcom to my awoseme home page with lots of stuff</p>
        <h2>Anssi kela name generator</h2>
        <label>Input yur name to find out your anssi kela name</label>
        <br />
        <input
          id="n"
          onChange={(event) => {
            a = event.target.value;
          }}
        />
        <button onClick={() => alert(`your anssi kela name is ${a} Kela`)}>
          generate
        </button>
        <br />
        <br />
        <br />
        <img src={image} />
        <marquee behavior="alternate" direction="right">
          Hello
        </marquee>
        <marquee>world</marquee>
        <footer>Here's a footer</footer>
      </main>
    </>
  );
}
