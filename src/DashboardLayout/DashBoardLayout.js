import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Shared/Shared/Header/Header';

const DashBoardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                <Outlet></Outlet>
                    {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to ='myorder'>My Order</Link></li>
                        <li><Link to='addproduct'>Add Your Product</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default DashBoardLayout;