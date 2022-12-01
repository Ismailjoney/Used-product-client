import React, { useEffect, useState } from 'react';
import Allcategories from './Allcategories';

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() =>{ 
        fetch('https://used-products-server-omega.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        
    },[])


    return (
        <div>
            <h2 className='text-3xl text-green-100 tracking-wide font-bold my-0 mt-9'>Buy Used Baik </h2>
            <div className=' my-7 grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
             
            {
                categories.map(categorie => <Allcategories
                    id={categorie.c_id}
                    categorie = {categorie}
                ></Allcategories>)
            }
        </div>
        </div>
        
    );
};

export default Categories;