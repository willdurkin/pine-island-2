import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Post = () => {

	const [postId, setPostId] = useEffect(2272)
	const [post, setPost] = useEffect({})

	useEffect(() => {
	    let url =
	      `https://pineisland.org/blog/wp-json/wp/v2/posts/${postId}`;

	    const makeApiCall = async () => {
	      const res = await fetch(url);
	      const json = await res.json();

	      	console.log("blogpost - ", json);
	      	console.log("res ", res.headers);
	      
	      setPost(json);
	    };
	    makeApiCall();
	  }, [setPost]);

	return (
		
		<div className='blog'>
			<p>This is a post!</p>
			<div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
		</div>
	)
};

export default Post;