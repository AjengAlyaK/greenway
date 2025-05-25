import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import HomePage from './pages/HomePage';
import CampaignPage from './pages/CampaignPage';
import DetailCampaignPage from './pages/DetailCampaignPage';
import ArticlePage from './pages/ArticlePage';
import DestionationPage from './pages/DestionationPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DetailDestinationPage from './pages/DetailDestinationPage';
import DiscussionPage from './pages/DiscussionPage';
import DetailDiscussionPage from './pages/DetailDiscussionPage';
import AddDiscussionPage from './pages/AddDiscussionPage';
import AboutUsPage from './pages/AboutUsPage';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/campaigns" element={<CampaignPage />} />
            <Route path="/campaign/:id" element={<DetailCampaignPage />} />
            <Route path="/articles" element={<ArticlePage />} />
            <Route path="/destinations" element={<DestionationPage />} />
            <Route path="/destination/:id" element={<DetailDestinationPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<RegisterPage />} />
            <Route path="/discussion" element={<DiscussionPage />} />
            <Route path="/discussion/:id" element={<DetailDiscussionPage />} />
            <Route path="/discussion/add" element={<AddDiscussionPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default Router;