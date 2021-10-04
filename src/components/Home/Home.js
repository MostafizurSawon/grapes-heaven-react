import React, { useEffect, useState } from 'react';
import ServiceDetails from '../Services/ServiceDetails/ServiceDetails';
import HomeService from './HomeService/HomeService';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('./grapes.JSON')
        .then(res=>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            Home
            <div>
                {
                    services.slice(0, 4).map(grapes => <HomeService key={grapes.key} grapes={grapes}></HomeService>)
                }
            </div>
            
        </div>
    );
};

export default Home;