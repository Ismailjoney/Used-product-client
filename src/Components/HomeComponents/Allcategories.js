import React from 'react';
import { Link } from 'react-router-dom';

const Allcategories = ({ categorie }) => {

    const { name, img, c_id } = categorie;
    return (

        <div className="card w-100 bg-slate-600 shadow-xl mt-9 my-9">
            <figure className="px-10 pt-10">
                <img style={{ width: '400px', height: '300px' }} src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-gray-50 text-right text-justify">Brand Name :{name}</h2>
                <p className='text-gray-50 text-right text-justify'>Hey Visitors, Welcome to our reused product sell website.We are sell this website in this {name} brand Baik.You can Buy this baik minimum offer price </p>

                <div className="card-actions">
                    <Link to={`/categories/${c_id}`}>
                        <button className="btn btn-primary">
                            See All
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 pl-3">
                                <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                            </svg>

                        </button>
                    </Link>

                </div>
            </div>
        </div >

    );
};

export default Allcategories;