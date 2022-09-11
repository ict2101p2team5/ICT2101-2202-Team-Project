import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="container p-5 flex justify-center">
        <form className="bg-red-100 rounded-md flex flex-col justify-center shadow-md">
          <div className="flex flex-col gap-5 p-5">
            <label>
              Employee ID<span className="text-rose-500">*</span>
            </label>
            <input type="text" required={true} placeholder="2101234" className="rounded-md px-2 focus:outline-blue-600" />
            <label>
              Password<span className="text-rose-500">*</span>
            </label>
            <input type="password" required={true} className="rounded-md px-2 focus:outline-blue-600" />
          </div>
          <button className="m-5 p-2 text-white transition-colors duration-300 bg-blue-600 rounded-md shadow-md hover:bg-blue-500">Login</button>
        </form>
      </section>
    </Layout>
  );
};

export default Home;
