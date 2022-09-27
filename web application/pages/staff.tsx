import type { NextPage } from "next";
import Layout from "../components/Layout";
import Month from "../components/Month";
import React, {useState} from "react";
import {getMonth, getMonthName} from "./date";

const Staff: NextPage = () => {
const monthArray = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];
const [currentMonth, setCurrentMonth] = useState(getMonth());
const [monthName, setMonthName] = useState(getMonthName());
  return (

    <Layout>
      <header className="flex justify-center mt-10 border-1">{monthArray[monthName]}</header>
      <section className="flex h-screen flex-columns">
        <Month month={currentMonth}/>
      </section>
    </Layout>
  );
};

export default Staff;
