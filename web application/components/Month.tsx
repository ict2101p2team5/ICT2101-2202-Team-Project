import React, { Component } from 'react';
import Day from "./Day";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Month({ month }:any) {
    return (
        <div className="grid flex-1 grid-cols-1 grid-rows-1">
        {month.map((row, i) => (
            <Carousel showArrows={true} showThumbs={false} key={i}>
                {row.map((day, idx) => (
                    <Day day={day} key={idx} />
                ))}
            </Carousel>
        ))}
        </div>
    );
}
