import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Pages/Shared/Nav/Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet/>
        </div>
    );
};

export default Main;