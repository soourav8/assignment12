import React, { useEffect, useState } from "react";
import { Card } from "./Card";


export const PopularClasses = (props) => {
    // const [items, setItems] = useState([]);
    const [classes, setClassess] = useState([]);
    useEffect(() => {
        fetch("classes.json")
            .then(res => res.json())
            .then(data => setClassess(data))
    }, [])


    const sortedClasses = classes.sort((a, b) => b.students - a.students);
       



    return (
        <>
            <p className="text-center text-3xl font-bold mt-12">Popular Classes</p>
            <div className="mt-5 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">


                {
                    sortedClasses.map(item => <Card key={item.index} item={item}></Card>)

                }


            </div>
        </>

    );
}