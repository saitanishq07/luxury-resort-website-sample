import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import StayPage from './pages/StayPage';
import RoomDetail from './pages/RoomDetail';
import ExperiencesPage from './pages/ExperiencesPage';
import WellnessPage from './pages/WellnessPage';
import DiningPage from './pages/DiningPage';
import GalleryPage from './pages/GalleryPage';
import StoryPage from './pages/StoryPage';
import DestinationPage from './pages/DestinationPage';
import BookPage from './pages/BookPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stay" element={<StayPage />} />
            <Route path="/stay/:roomId" element={<RoomDetail />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/wellness" element={<WellnessPage />} />
            <Route path="/dining" element={<DiningPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/destination" element={<DestinationPage />} />
            <Route path="/book" element={<BookPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
