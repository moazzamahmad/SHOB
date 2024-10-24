import React from 'react';
import { BookSearch, Library, MessageSquare, User } from 'lucide-react';
import Navbar from './components/Navbar';
import BookGrid from './components/BookGrid';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedBooks from './components/FeaturedBooks';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedBooks />
      
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden">
        <div className="flex justify-around p-3">
          <button className="flex flex-col items-center text-gray-600">
            <Library className="h-6 w-6" />
            <span className="text-xs mt-1">Browse</span>
          </button>
          <button className="flex flex-col items-center text-gray-600">
            <BookSearch className="h-6 w-6" />
            <span className="text-xs mt-1">Search</span>
          </button>
          <button className="flex flex-col items-center text-gray-600">
            <MessageSquare className="h-6 w-6" />
            <span className="text-xs mt-1">Messages</span>
          </button>
          <button className="flex flex-col items-center text-gray-600">
            <User className="h-6 w-6" />
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;