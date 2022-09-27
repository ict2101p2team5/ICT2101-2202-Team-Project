import type { NextPage } from "next";
import Layout from "../components/Layout";
import Month from "../components/Month";
import React, {useState} from "react";
import {getMonth} from "./date";

const Staff: NextPage = () => {

const [currentMonth, setCurrentMonth] = useState(getMonth());
console.log(getMonth().length)
  return (

    <Layout>
      <section className="flex h-screen flex-columns">
        <Month month={currentMonth}/>
      </section>
    </Layout>
  );
};

export default Staff;
