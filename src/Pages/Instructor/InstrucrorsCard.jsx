import React from "react";

export const InstructorsCard = ({item}) => {
    console.log(item)
    return (
        <div className="">
            <div className="card card-compact w-75 h-full bg-base-100 shadow-xl ">
                <figure><img src={item.image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {item.name}</h2>
                    <p>Email: {item.email}</p>
                    
                </div>
            </div>
        </div>
    );
}