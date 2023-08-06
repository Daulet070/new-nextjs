'use client';
import  useSWR from 'swr';
// import { usePosts } from '@/store';
// import { shallow } from 'zustand/shallow';
// import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAllPosts } from '@/services/getPosts';

// type Props = {
//     posts: any[]
// }

const Posts = (/*{posts}: Props*/) => {
    const {data: posts, isLoading} = useSWR('posts', getAllPosts);
    // zustand hoock not need with swr
    // const [posts, loading, getAllPosts] = usePosts((state) => [
    //     state.posts,
    //     state.loading,
    //     state.getAllPosts,
    //     state.getPostsBySearch
    // ], shallow);

    // useEffect(() => {
    //     getAllPosts()
    // }, [getAllPosts]);

    return isLoading ? (
        <h3>Loading...</h3>
    ) : (
        <ul>
            {posts.map((post: any) => (
                <li key={post.id}>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    );
};

export {Posts};