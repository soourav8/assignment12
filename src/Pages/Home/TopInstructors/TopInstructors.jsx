import React, { useEffect, useState } from "react";
import { Card } from "../PopularClasses/Card";


export const TopInstructors = (props) => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch("instructors.json")
        .then(res => res.json())
        .then(data => setItems(data))
    } , [])
    return (
        <div className="-view">
            <p className="text-center text-3xl font-bold mt-12">Top Instructors</p>
            <div className="mt-5 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {
                    items.slice(0, 6).map(item => <Card key={item.index} item={item}></Card>)

                }
            </div>

        </div>
    );
}