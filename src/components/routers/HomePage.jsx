import React from 'react';
import FirstBox from '../FirstBox';
import CardComponent from '../Card';
import Horoscopes from '../Horoscopes';
import Astrologers from '../Astrologers';
import  Reports  from '../Reports';
import AskQuestion from '../AskQuestion';
import Customers from '../Customers';

function HomePage() {
    return (
        <div>
            <CardComponent></CardComponent>
            <FirstBox></FirstBox>
            <Horoscopes></Horoscopes>
            <Astrologers></Astrologers>
            <Reports></Reports>
            <AskQuestion></AskQuestion>
            <Customers></Customers>
        </div>
    )
}

export default HomePage
