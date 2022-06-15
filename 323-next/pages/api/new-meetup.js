import { MongoClient } from 'mongodb';

// api/new-meetup
// 클라이언트에서 이 코드를 볼 수 없기에 여기에 db 정보를 작성해도 됨.
async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://sonky740:minwise4014@cluster0.reatrgr.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
