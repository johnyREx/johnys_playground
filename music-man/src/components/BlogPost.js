import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  // Fetch individual blog post based on ID
  // This is just a placeholder for demonstration purposes
  const post = { title: 'Sample Post', content: 'This is the content of the sample post.', author: 'John Doe', date: 'May 17, 2024' };

  return (
    <div className="container">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
      <p>Date: {post.date}</p>
    </div>
  );
}

export default BlogPost;
