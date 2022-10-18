import React, {useState} from "react";

export default function Day({ day }:any) {
  return (
    <div className="flex flex-col border border-gray-200">
      <div className="flex flex-row items-center justify-evenly">
            {day.map((index) => (
                <div>
                  <br></br>
                    <p className="mt-1">
                    {index.format("MMMM").toUpperCase()}
                    </p>
                    <p className="mt-1">
                    {index.format("ddd").toUpperCase()}
                    </p>
                    <p>
                    {index.format("DD")}
                    </p>
                    <button className="m-11">
                        12AM slot
                    </button>
                    <button className="m-11">
                        12PM slot
                    </button>
                </div>
            ))}
      </div>
    </div>
  );
}