import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthorProvider';
import Loading from '../../../Loading/Loading';
import SingleProduct from '../SingleProduct/SingleProduct';
import BookingModal from './BookingModal/BookingModal';

const CategoriesItemDetails = () => {
    const {loading} = useContext(AuthContext)
    const datas = useLoaderData([])
    const [productBooked, setProductBooked] = useState(null)

    if(loading){
        <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl'>Used Baik  Price</h2>
            <div className='mt-7 my-7 grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
                {
                    datas.map(data => <SingleProduct
                        id={data._id}
                        data={data}
                        setProductBooked={setProductBooked}
                    ></SingleProduct>)
                }
            </div>
            {
                productBooked &&
                <BookingModal
                    productBooked={productBooked}
                ></BookingModal>
            }
        </div>
    );
};

export default CategoriesItemDetails;