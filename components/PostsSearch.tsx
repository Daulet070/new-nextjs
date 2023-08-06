'use client';

import { getPostsBySearch } from '@/services/getPosts';
import  useSWR from 'swr';
// import { usePosts } from '@/store';
import { FormEventHandler, useState } from 'react';

// commented code not need with zustand
// type Props = {
//     onSearch: (value: any[]) => void
// };

const PostsSearch = (/*{ onSearch }: Props*/) => {
    const { mutate } = useSWR('posts');
    const [serach, setSearch] = useState('');
    // const getPostsBySearch = usePosts(state => state.getPostsBySearch) #not need with swr

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const posts = await getPostsBySearch(serach);

        // onSearch(posts);
        mutate(posts);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='search' 
                placeholder='serach' 
                value={serach} 
                onChange={event => setSearch(event.target.value)} 
            />
            <button type='submit'>Search</button>
        </form>
    );
};

export {PostsSearch};