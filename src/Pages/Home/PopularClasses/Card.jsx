import React from "react";

export const Card = ({ item }) => {

    return (
        <div className="">

            <div className="card card-compact w-75 h-full bg-base-100 shadow-xl">
                <figure><img src={item.image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>

                </div>
            </div>
        </div>
    );
}