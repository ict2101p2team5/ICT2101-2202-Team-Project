import type { NextPage } from "next";
import Layout from "../components/Layout";
import Month from "../components/Month";
import React, {useState} from "react";
import {getMonth} from "./date";

const Staff: NextPage = () => {
const [currentMonth, setCurrentMonth] = useState(getMonth());
  return (
    <Layout>
      <header className="flex justify-center mt-10 border-1">Staff Availability Calendar</header>
      <section className="flex h-screen flex-columns">
        <Month month={currentMonth}/>
      </section>
    </Layout>
  );
};

export default Staff;
