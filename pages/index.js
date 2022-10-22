import Head from "next/head";
import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Meet US 🌟</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
