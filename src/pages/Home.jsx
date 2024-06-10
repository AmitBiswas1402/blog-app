import React from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then(() => {
            if (posts) {
                setPosts(posts.documents)
            }
        })      
    }, [])

  return (
    <div>Home</div>
  )
}

export default Home