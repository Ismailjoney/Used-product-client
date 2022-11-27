import React from 'react';

const BookingModal = ({ productBooked }) => {
    const { image, details, location, original_price, resale_price, seller_name, tittle, years_of_used } = productBooked;
    return (
        <>
            {/* The button to open modal */}
            {/* <label htmlFor="BookingModal" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="BookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="BookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* <h3 className="text-lg font-bold">{productBooked.seller_name}</h3>
                    <p className="py-4"> free!</p> */}
                    
                    <br />
                    <form className='grid grid-cols-1 gap-3 mt-10'>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-3" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-3" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-3" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-3" />
                    <input className='btn btn-accent w-full mt-3' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;