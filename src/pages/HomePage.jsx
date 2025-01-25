import React, { useEffect } from 'react';
import HeroArea from "../Components/HeroArea";
import Record from "../Components/Record";
import BetterFuture from "../Components/BetterFuture";
import Explore from "../Components/Explore";
import CampaignSlightly from "../Components/CampaignSlightly";
import Review from "../Components/Review";
import Video from "../Components/Video";
import CommunityIsCalling from "../Components/CommunityIsCalling";
import { asyncInitializeAuthUser } from '../states/authUser/action';
import { useDispatch } from 'react-redux';

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncInitializeAuthUser());
    }, [dispatch]);

    return (
        <>
            {/* hero area */}
            <HeroArea />
            {/* record */}
            <Record />
            {/* better future */}
            <BetterFuture />
            {/* explore */}
            < Explore />
            {/* little campaign */}
            < CampaignSlightly />
            {/* review */}
            < Review />
            {/* video */}
            < Video />
            {/* join community */}
            < CommunityIsCalling />
        </>
    );
};

export default HomePage;