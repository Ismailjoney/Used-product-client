import React from 'react';
 

const SingleProduct = ({ data, setProductBooked }) => {

    const { image, details, location, original_price, resale_price, seller_name, tittle, years_of_used } = data;
    return (
        <div>
            <div className="card card-compact w-100 bg-base-100 shadow-xl">
                <figure >
                    <img style={{ width: '100%', height: '250px' }} src={image} alt="baik" />
                </figure>
                <div className="card-body text-gray-50 text-right text-justify">
                    <h2 className="card-title">{tittle}</h2>
                    <p>info : {details}</p>
                    <h3>Original Price: {original_price}</h3>
                    <h3> Price: {resale_price}</h3>
                    <p>Used : {years_of_used}</p>
                    <p>Location: {location}</p>
                    <p>Seller Name : {seller_name}</p>

                    <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Buy Now</button> */}
                        <label
                            onClick={() => setProductBooked(data)}
                            htmlFor="BookingModal"
                            className="btn btn-primary">Buy Now</label>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default SingleProduct;