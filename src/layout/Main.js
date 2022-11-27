import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Shared/Footer/Footer';
import Header from '../Shared/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;