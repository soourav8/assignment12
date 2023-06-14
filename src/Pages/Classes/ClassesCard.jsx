import React from "react";

export const ClassesCard = ({item}) => {
    const cardStyle = { backgroundColor : item.availableSeats == 0 ? "red" : "inherit"}
    const buttonDisabled = item.availableSeats === 0;
    return (
        <div className="-view">
            <div style={cardStyle} className="card w-75 h-full bg-base-100 shadow-xl">
                <figure><img src={item.image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <p> Name: {item.name}</p>
                    <p>Instructor name: {item.instructorName}</p>
                    <div>
                    
                    <p >Available seats: {item.availableSeats}</p>
                    </div>
                    <p>Price: {item.price}</p>
                    <div className="card-actions justify-end">
                        <button disabled={buttonDisabled} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}