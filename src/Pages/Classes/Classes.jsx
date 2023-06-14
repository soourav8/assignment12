import React, { useEffect, useState } from 'react';
import { ClassesCard } from './ClassesCard';

const Classes = () => {
    const [classes, setClasses] = useState([]);
    useEffect(()=>{
        fetch("https://b7a12-summer-camp-server-side-soourav8.vercel.app/classes")
        .then(res => res.json())
        .then(data => setClasses(data))
    },[])
    return (
        <div className='mt-12 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' >
            {
                classes.map(item => <ClassesCard key={item._id} item={item}></ClassesCard>)
            }
        </div>
    );
};

export default Classes;