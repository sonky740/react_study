import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

// getStaticProps와의 차이점은 빌드 프로세스 중에는 실행되지 않음.
// 대신 서버에서 실행함.
// 요청이 들어올 때마다 실행됨.
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

// 초기에 페이지가 생성되기 전에 backend에서 데이터를 미리 불러서 페이지를 사전생성 해주기 위함.
// 클라이언트에서 이 코드를 볼 수 없기에 여기에 db 정보를 작성해도 됨.
export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    'mongodb+srv://sonky740:minwise4014@cluster0.reatrgr.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
      })),
    },
    revalidate: 1, // 초마다 데이터를 체크하여 페이지를 사전생성하여 교체함.
  };
}

export default HomePage;
