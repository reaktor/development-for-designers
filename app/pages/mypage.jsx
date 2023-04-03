import Logo from "../components/Logo";

export default function MyPage() {
  return (
    <>
      <header>
        <Logo />
      </header>
      <main>
        <h1>My basic home page</h1>
        <span>
          Hello everyone. This is my basic home page. Here, have some{" "}
          <a href="https://slipsum.com/">Samuel L. Ipsum:</a>
        </span>
        <p>
          The path of the righteous man is beset on all sides by the iniquities
          of the selfish and the tyranny of evil men. Blessed is he who, in the
          name of charity and good will, shepherds the weak through the valley
          of darkness, for he is truly his brother's keeper and the finder of
          lost children. And I will strike down upon thee with great vengeance
          and furious anger those who would attempt to poison and destroy My
          brothers. And you will know My name is the Lord when I lay My
          vengeance upon thee.
        </p>
      </main>
    </>
  );
}
