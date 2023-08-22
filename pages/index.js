import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-zinc-100">
      <Head>
        <title>Next Movie App</title>
        <meta name="description" content="created by Özgenur Özkara" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <Header />
      <Navbar />
    </div>
  );
}
