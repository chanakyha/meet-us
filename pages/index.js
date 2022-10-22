import Head from "next/head";
import Login from "../components/Login";
import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();

  if (user == false) return <Login />;

  return (
    <div className="">
      <Head>
        <title>Meet US 🌟</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
