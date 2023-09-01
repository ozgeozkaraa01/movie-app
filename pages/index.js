import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";

import axios from "axios";
import Error from "./error";
import Footer from "../components/Footer";

export default function Home() {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null); // Hata durumu için bir state

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/all/week",
          {
            params: {
              api_key: "e04ef0767144f1d3e5ec3a089f172425",
              language: "en-US",
              page: 1,
            },
          }
        );
        setResults(response.data.results);
        setError(null); // Hata durumunu sıfırla
      } catch (error) {
        setError(error); // Hata durumunu ayarla
      }
    };

    fetchResults();
  }, []);
  return (
    <div className="dark:bg-gray-900 bg-indigo-100 w-screen overflow-y-scroll h-screen">
      <Head>
        <title>Next Movie App</title>
        <meta name="description" content="created by Özgenur Özkara" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <Header />
      <Navbar />
      {error ? <Error error={error} /> : <Results results={results} />}
      <Footer />
    </div>
  );
}
