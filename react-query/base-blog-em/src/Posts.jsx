import { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { PostDetail } from './PostDetail';
const maxPostPage = 10;

async function fetchPosts(pageNum) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`
  );
  return response.json();
}

export function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (currentPage < maxPostPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(['posts', nextPage], () =>
        fetchPosts(nextPage)
      );
    }
  }, [currentPage, queryClient]);

  // replace with useQuery
  // isFetching: 데이터를 다시 가져올 때 사용
  // isLoading: 데이터를 처음 가져올 때 사용
  const { data, isError, error, isLoading, isFetching } = useQuery(
    ['posts', currentPage],
    () => fetchPosts(currentPage),
    {
      staleTime: 2000, // 데이터가 fresh => stale로 바뀌는 시간
      // cacheTime: 2000, // 데이터가 inactive 상태일 때 캐싱된 상태로 남아있는 시간
      keepPreviousData: true, // 이전 데이터를 보여줄지 여부
    }
  );
  if (isFetching) return <h3>Fetching...</h3>;
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
        <button
          disabled={currentPage <= 1}
          onClick={() => setCurrentPage((previousValue) => previousValue - 1)}
        >
          Previous page
        </button>
        <span>Page {currentPage}</span>
        <button
          disabled={currentPage >= maxPostPage}
          onClick={() => setCurrentPage((previousValue) => previousValue + 1)}
        >
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
