import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Movie App</title>
        <meta name="description" content="created by Özgenur Özkara" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <Navbar />
    </div>
  );
}
