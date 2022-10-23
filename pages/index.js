import Head from "next/head";
import Login from "../components/Login";
import { useAuth } from "../hooks/useAuth";
import Header from "../components/Menu";
import { Divider } from "antd";

const Home = () => {
  const { user } = useAuth();

  if (user == false) return <Login />;

  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Meet US 🌟</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-full">
        <div className="w-[25%] h-screen hidden md:flex"></div>
        <div className="h-full hidden md:block">
          <Divider type="vertical" style={{ height: "100%" }} />
        </div>
        <Header />
      </div>
    </div>
  );
};

export default Home;
