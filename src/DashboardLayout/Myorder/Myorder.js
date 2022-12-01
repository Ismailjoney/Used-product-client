import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthorProvider';

const Myorder = () => {
    
    const {user} = useContext(AuthContext)
    const[order, setOrder] = useState()

    // const url = `https://used-products-server-omega.vercel.app/booking?email=${user?.email}`;

    useEffect(()=>{
        fetch(`https://used-products-server-omega.vercel.app/booking?email=${user?.email}`)
        .then(res => res.json())
        .then(data =>  setOrder(data))
    },[user?.email])

    return (
        <div>
        <h3 className="text-3xl mb-5">My Orders</h3>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Phone</th>
                        <th>Price</th>
                        <th>title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        order &&
                        order?.map((order, i) => <tr key={order._id}>
                            <th>{i + 1}</th>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.phone}</td>
                            <td>{order.price}</td>
                            <td>{order.title}</td>
                             
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Myorder;