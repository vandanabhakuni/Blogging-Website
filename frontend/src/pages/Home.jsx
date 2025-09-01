import React from "react";

const Home = () => {
  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Latest Blogs
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder Blog Cards */}
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <div
            key={id}
            className="p-5 border rounded-xl shadow hover:shadow-lg bg-white dark:bg-gray-800"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Blog Title {id}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This is a short description of blog {id}. AI-generated summaries
              can go here.
            </p>
            <button className="text-blue-600 dark:text-blue-400 hover:underline">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
