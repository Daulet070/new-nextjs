'use client';
import { Posts } from '@/components/Posts';
import { PostsSearch } from '@/components/PostsSearch';
import { Metadata } from 'next';
// import { getAllPosts } from '@/services/getPosts';

// Server components code, not need with client side
// async function getData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         next: {
//             revalidate: 60,
//         }
//     });

//     if(!response.ok) throw new Error('Unable to fetch posts!');

//     return response.json();
// }

export const metadata: Metadata = {
    title: 'Blog | Next App',
};

const Blog = /*async*/ () => {
    // const posts = await getData();
    
    // Client side code, not need with zustand
    // const [posts, setPosts] = useState<any[]>([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     getAllPosts()
    //         .then(setPosts)
    //         .finally(() => setLoading(false))
    // }, []);

    return (
        <>
            <h1>Blog Page</h1>
            <PostsSearch /*onSearch={setPosts} # not need with zustand*/ /> 
            <Posts />
        </>
    );
};

export default Blog;