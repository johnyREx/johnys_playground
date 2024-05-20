import React from 'react';

const Home = () => {
  // Sample blog post data
  const blogPosts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.', author: 'John Doe', date: 'May 17, 2024' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.', author: 'Jane Smith', date: 'May 18, 2024' }
    // Add more sample posts as needed
  ];

  return (
    <div className="container">
      <h2>Recent Blog Posts</h2>
      <ul>
        {blogPosts.map(post => (
          <li key={post.id}>
            <a href={`/post/${post.id}`}>{post.title}</a> - {post.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
