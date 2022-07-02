import React from 'react';
import LastSection from './LastSection';
import OurToDoList from './OurToDoList';
import TopBanner from './TopBanner';

const Home = () => {

    return (
        <div className=''>
            <TopBanner></TopBanner>
            <OurToDoList></OurToDoList>
            <LastSection></LastSection>
        </div>
    );
};

export default Home;