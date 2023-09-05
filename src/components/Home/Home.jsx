import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';

const Home = () => {

    return (
        <div>
            <Header/>
            <div className='common-width'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Home;