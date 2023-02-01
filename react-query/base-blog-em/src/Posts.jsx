import { useState } from 'react';
import { useQuery } from 'react-query';

import { PostDetail } from './PostDetail';
const maxPostPage = 10;

async function fetchPosts() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0'
  );
  return response.json();
}

export function Posts() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);

  // replace with useQuery
  // isFetching: 데이터를 다시 가져올 때 사용
  // isLoading: 데이터를 처음 가져올 때 사용
  const { data, isError, error, isLoading } = useQuery('posts', fetchPosts, {
    staleTime: 2000, // 데이터가 fresh => stale로 바뀌는 시간
    // cacheTime: 2000, // 데이터가 inactive 상태일 때 캐싱된 상태로 남아있는 시간
  });
  if (isLoading) return <h3>Loading...</h3>;
  if (isError) {
    return (
      <>
        <h3>Oops, something went wrong!</h3>
        <p>{error.toString()}</p>
      </>
    );
  }

  return (
    <>
      <ul>
        {data.map((post) => (
          <li
            key={post.id}
            className="post-title"
            onClick={() => setSelectedPost(post)}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button disabled onClick={() => {}}>
          Previous page
        </button>
        <span>Page {currentPage + 1}</span>
        <button disabled onClick={() => {}}>
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
