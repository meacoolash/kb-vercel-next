import Image from "next/image";

export default function Home() {

  const my_var = process.env.MY_KEY;
  const my_var2 = process.env.MY_KEY_2;

  return (
    <div>
      <h1>PRODUCTION</h1>
      <p>var 1: {my_var}</p>
      <p>vyr 2: {my_var2}</p>
    </div>
  );
}
