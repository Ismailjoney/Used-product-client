import React from 'react';
import Banner from '../../Components/HomeComponents/Banner';
import Categories from '../../Components/HomeComponents/Categories';
import Description from '../../Components/HomeComponents/Description';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Description></Description>
           <Categories></Categories>
        </div>
    );
};

export default Home;