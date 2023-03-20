"use client"
import { useEffect, useState } from 'react'
import { useSearchParams} from 'next/navigation'
import { Container } from 'react-bootstrap';
import { useGlobalContextPost } from '../../Context/postStore';

export default function SinglePost() {
    const _id = useSearchParams().get("post") as string
    const {
        data: post,
        loading: isLoading,
        error: isError,
        getPost,
    } = useGlobalContextPost();

    useEffect(() => {
        getPost(_id);
    }
    , [_id]);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        return <h1>{isError}</h1>;
    }

    if (!post) {
        return <h1>Nothing to show</h1>;
    }

    return (
        <Container>
            <h1>{post.title}</h1>
            <p>{post.description}</p>

        </Container>
    );

}

