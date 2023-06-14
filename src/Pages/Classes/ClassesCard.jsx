import React from "react";

export const ClassesCard = ({item}) => {
    return (
        <div className="-view">
            <div className="card w-75 h-full bg-base-100 shadow-xl">
                <figure><img src={item.image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <p> Name: {item.name}</p>
                    <p>Instructor name: {item.instructorName}</p>
                    <p>Available seats: {item.availableSeats}</p>
                    <p>Price: {item.price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}