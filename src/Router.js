import React from 'react';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import CampaignPage from './pages/CampaignPage';
import DetailCampaignPage from './pages/DetailCampaignPage';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/campaigns" element={<CampaignPage />} />
            <Route path="/campaign" element={<DetailCampaignPage/>}/>
        </Routes>
    );
};

export default Router;