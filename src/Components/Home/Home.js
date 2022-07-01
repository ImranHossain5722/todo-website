import React from 'react';
import OurToDoList from './OurToDoList';
import TopBanner from './TopBanner';

const Home = () => {

    return (
        <div className=''>
            <TopBanner></TopBanner>
            <OurToDoList></OurToDoList>
        </div>
    );
};

export default Home;