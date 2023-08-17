import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const sendRequest = async () => {
    const res = await axios.get('http://localhost:5000/api/blog');
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs));
  }, []);
  console.log(blogs);
  return (
    <div>
      {blogs &&
        blogs.map((blog) => (
          <Card
            key={blog._id}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            id={blog._id}
          />
        ))}
    </div>
  );
};

export default Blogs;
