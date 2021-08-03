import axios from "axios";
import PostList from "../components/PostList";

export default function Home({posts}) {
  return (
      <PostList posts={posts}/>
  )
}

export async function getServerSideProps(context) {

    const apiURL = 'http://localhost:8000/api/posts'
    const {data:posts} = await axios.get(apiURL)
    return {
        props: {posts},
    }
}

