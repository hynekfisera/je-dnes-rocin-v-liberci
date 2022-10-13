import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(getText());
  }, []);

  const getText = () => {
    const date = new Date();
    const day = date.getDay();
    if (day === 4) {
      return "Ano.";
    } else {
      return "Ne.";
    }
  };

  return (
    <>
      <Head>
        <title>Je dnes Ročín v Liberci?</title>
      </Head>
      <h1>{text}</h1>
    </>
  );
}
