import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="container flex justify-center p-5">
        <form className="flex flex-col justify-center bg-red-100 rounded-md shadow-md">
          <div className="flex flex-col gap-5 p-5">
            <label>
              Employee ID<span className="text-rose-500">*</span>
            </label>
            <input type="text" required={true} placeholder="2101234" className="px-2 rounded-md focus:outline-blue-600" />
            <label>
              Password<span className="text-rose-500">*</span>
            </label>
            <input type="password" required={true} className="px-2 rounded-md focus:outline-blue-600" />
          </div>
          <button className="p-2 m-5 text-white transition-colors duration-300 bg-blue-600 rounded-md shadow-md hover:bg-blue-500">Login</button>
        </form>
      </section>
    </Layout>
  );
};

export default Home;
