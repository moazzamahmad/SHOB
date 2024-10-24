import React from 'react';
import { Star, MessageCircle } from 'lucide-react';

const books = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 12.99,
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    price: 15.99,
    condition: 'Excellent',
    image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    rating: 4.8,
    reviews: 256,
  },
  {
    id: 3,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: 9.99,
    condition: 'Very Good',
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    rating: 4.7,
    reviews: 312,
  },
  {
    id: 4,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 14.99,
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80',
    rating: 4.9,
    reviews: 428,
  },
];

export default function FeaturedBooks() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Featured Books</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {books.map((book) => (
            <div key={book.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {book.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{book.author}</p>
                  <p className="mt-1 text-sm text-gray-500">Condition: {book.condition}</p>
                  <div className="flex items-center mt-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-500">
                      {book.rating} ({book.reviews})
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">${book.price}</p>
                  <button className="mt-2 flex items-center text-sm text-indigo-600 hover:text-indigo-500">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Chat
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}