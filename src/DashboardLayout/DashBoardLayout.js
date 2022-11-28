import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Shared/Shared/Header/Header';

const DashBoardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                         
                        <li><Link className=' text-right text-justify' to='/order'>Your Order</Link></li>
                        <li><Link to='addproduct'>Add Your product</Link></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;