import React from 'react';
import { BookOpen, Coffee, Rocket, Heart, Music, Theater, Lightbulb } from 'lucide-react';

const categories = [
  { name: 'Fiction', icon: BookOpen },
  { name: 'Self Help', icon: Coffee },
  { name: 'Sci-Fi', icon: Rocket },
  { name: 'Romance', icon: Heart },
  { name: 'Arts', icon: Music },
  { name: 'Drama', icon: Theater },
  { name: 'Education', icon: Lightbulb },
];

export default function Categories() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Categories</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Explore by genre
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.name}
                  className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer"
                >
                  <div>
                    <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium">
                      <a href="#" className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {category.name}
                      </a>
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}