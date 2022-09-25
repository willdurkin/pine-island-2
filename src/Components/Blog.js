import React, { useState, useEffect } from 'react';

const Blog = () => {

	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [pageNumber, setPageNumber] = useState(1);

	  useEffect(() => {
	    let url =
	      `https://pineisland.org/blog/wp-json/wp/v2/posts?_embed&per_page=5&page=${page}`;

	    const makeApiCall = async () => {
	      const res = await fetch(url, {
     		 params: { page: page }
    	  });
	      const json = await res.json();

	      	console.log("json 1 - ", json);
	      	console.log("res ", res.headers);
	      
	      setPageNumber(res.headers.get("X-WP-TotalPages"));
	      setPosts(json);
	    };
	    makeApiCall();
	  }, [page, setPosts]);

	  const handlePrevPage = () => setPage(page - 1 ? page - 1 : 1);
	  const handleNextPage = () => setPage(page < pageNumber ? page + 1 : pageNumber);

	  let postList = posts.map((post, i) => {
	  	console.log(posts);
	  	
	    return (
	      <div>
	        <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
	        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
	      </div>
	    );
	  });

    return (
    	<div className='body'>
    		<h1>The Pine Island Blog</h1>

	    	<div className="blog">

	    		{postList}

		    	 <div className="posts-app__post-nav">
			         <button onClick={handlePrevPage}>Newer posts</button>
			         <p>Page {page} of {pageNumber}</p>
			         <button onClick={handleNextPage}>Older posts</button>
		        </div>
	    	</div> 
	     </div>
  	 )
}

export default Blog;