import React, { useEffect, useState } from 'react';
import { InstructorsCard } from './InstrucrorsCard';

const Instructor = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect( ()=>{
        fetch("https://b7a12-summer-camp-server-side-soourav8.vercel.app/instructors")
        .then(res => res.json())
        .then(data => setInstructors(data))
    },[])

    return (
        <div className=' mt-12 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
            {
                instructors.map(item => <InstructorsCard key={item._id} item={item}></InstructorsCard>)
            }
            
        </div>
    );
};

export default Instructor;