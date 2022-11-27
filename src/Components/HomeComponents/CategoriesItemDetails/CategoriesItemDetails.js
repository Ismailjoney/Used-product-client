import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from '../SingleProduct/SingleProduct';

const CategoriesItemDetails = () => {
    const datas = useLoaderData([])
 
    return (
        <div>
            <h2 className='text-2xl'>Used Baik  Price</h2>
            <div className='mt-7 my-7 grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
            {
                datas.map(data => <SingleProduct
                id={data._id}
                data={data}
                ></SingleProduct>)
            }
            </div>
            
        </div>
    );
};

export default CategoriesItemDetails;