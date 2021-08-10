import axios from "axios";
import Main from "../components/Main";

export default function Home({posts}) {
  return (
      <Main posts={posts}/>
  )
}

export async function getServerSideProps(context) {

    const apiURL = 'http://localhost:8000/api/posts'
    const {data:posts} = await axios.get(apiURL)
    return {
        props: {posts},
    }
}

