import React, { useEffect, useState } from "react";
import { Card } from "./Card";


export const PopularClasses = (props) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("classes.json")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <>
            <p className="text-center text-3xl font-bold mt-12">Popular Classes</p>
            <div className="mt-5 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">


                {
                    items.map(item => <Card key={item.index} item={item}></Card>)

                }


            </div>
        </>

    );
}