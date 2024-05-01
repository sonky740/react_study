import { useQuery } from 'react-query';
import { getMovies } from '../api/api';

export default function Main() {
  const { data, isLoading } = useQuery({
    queryKey: ['movies', 'nowPlaying'],
    queryFn: getMovies,
  });
  console.log(data, isLoading);
  return <div style={{ backgroundColor: 'whitesmoke', height: '200vh' }}></div>;
}
