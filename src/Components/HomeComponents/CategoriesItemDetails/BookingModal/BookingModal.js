import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../context/AuthorProvider';
import Loading from '../../../../Loading/Loading';

const BookingModal = ({ productBooked }) => {
    const { user, loading } = useContext(AuthContext)
    const {   resale_price, seller_name, title,  } = productBooked;

    //booking

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.name.title;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const price = form.price.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
            title,
            name,
            email,
            phone,
            price
        }

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        fetch('https://used-products-server-omega.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                     toast.success('Booking SuccessFull');
                    // refetch();
                }
                // else {
                //     toast.error(data.message);
                // }
            })


    }
     if(loading){
        <Loading></Loading>
     }


    return (
        <>
            <input type="checkbox" id="BookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="BookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    
                    <br />
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input type="text" name="title" defaultValue={title} disabled placeholder="Type here" className="input input-bordered w-full" />
                        <input type="text" name="price" defaultValue={resale_price} disabled placeholder="Type here" className="input  input-bordered w-full" />
                        <input type="email"name="email" defaultValue={user?.email} disabled placeholder="Type here" className="input input-bordered w-full" />
                        <input type="text" name="location" placeholder="Location"  className="input input-bordered w-full" required />
                        <input name="phone" type="number" placeholder="Phone Number" className="input w-full input-bordered" />
                         

                        
                        <input className='btn btn-accent w-full mt-3' type="submit" value="Submit" />

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;