import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const AddYourProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();


    const handleAddDoctor = data => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {

                if (imgData.success) {
                    console.log(imgData.data.url);
                    const info = {
                        img: imgData.data.url,
                        details: data.description,
                        original_price: data.original_price,
                        resale_price: data.resale_price,
                        location: data.location,
                        years_of_used: data.years_of_used,
                        // seller_name: data.seller_name,
                        // email: data.email,
                        category_id: data.option
                    }
                    console.log(info)

                    fetch('http://localhost:5000/productCategories', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(info)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            //setCreatedUserEmail(email);
                        })
                }
            })


        // console.log(info)


    }

    // if(isLoading){
    //     return  
    // }



    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl">Add  Your Product</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input  w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                {/* kjhk */}

                <div className="form-control w-full max-w-xs  ">
                    <label className="label"> <span className="label-text">Description</span></label>
                    <input type="text" {...register("description", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs h-20 p-6" />
                </div>
                <div className="form-control w-full max-w-xs  ">
                    <label className="label"> <span className="label-text">Original Price</span></label>
                    <input type="text" {...register("original_price", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs h-20 p-6" />
                </div>

                <div className="form-control w-full max-w-xs  ">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("location", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs h-20 p-6" />

                </div>
                {/* <div className="form-control w-full max-w-xs  ">
                    <label className="label"> <span className="label-text">Price</span></label>
                    <input type="text" {...register("resale_price", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />

                </div> */}
                <div className="form-control w-full max-w-xs  ">
                    <label className="label"> <span className="label-text">Used</span></label>
                    <input type="text" {...register("years_of_used", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />

                </div>
                

                {/* hjgjj */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("seller_name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>

                <div className="space-y-1 text-sm mb-3 mt-4">
                    <label htmlFor="password"   >
                        Select Your category option
                    </label>
                    <select
                        {...register("option", {
                            required: true
                        })}
                        className="input input-bordered w-full max-w-xs "
                    >
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                    </select>
                    {errors.email && <p>{errors.email.message}</p>}
                </div>

                <input className='btn btn-accent w-full mt-4' value="Add product" type="submit" />
            </form>
        </div>
    );
};

export default AddYourProduct;