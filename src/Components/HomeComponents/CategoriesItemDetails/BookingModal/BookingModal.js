import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthorProvider';

const BookingModal = ({ productBooked }) => {
    const {user} = useContext(AuthContext)
    const { image, details, location, original_price, resale_price, seller_name, title, years_of_used } = productBooked;
    return (
        <>
            <input type="checkbox" id="BookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="BookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* <h2 className='text-right'>{title}</h2> */}
                    <br />
                    <form className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" defaultValue={title} disabled  placeholder="Type here" className="input input-bordered w-full" />
                        <input type="text" defaultValue={resale_price} disabled placeholder="Type here" className="input  input-bordered w-full" />
                        <input type="email" defaultValue={user?.email} disabled  placeholder="Type here" className="input input-bordered w-full" />
                        <input type="text" placeholder="Location" className="input input-bordered w-full" />
                        <input type="number" placeholder="Mobile Number" className="input input-bordered w-full" />
                        <input className='btn btn-accent w-full mt-3' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;