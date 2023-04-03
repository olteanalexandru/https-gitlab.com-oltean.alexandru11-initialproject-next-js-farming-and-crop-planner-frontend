"use client"
import { useEffect, useState } from 'react'
import { useSearchParams} from 'next/navigation'
import { Container } from 'react-bootstrap';
import { useGlobalContextPost } from '../../../Context/postStore';

export default function SinglePost() {
    const _id = useSearchParams().get("post") as string
    const {
        data,
        loading,
        error,
        getPost,
    } = useGlobalContextPost();

    useEffect(() => {
        getPost(_id);
    }
    , [_id]);

    if (loading) {
        return <h1>Loading...</h1>;
    }
console.log(data , 'data')
   

    if (!data) {
        return <h1>Nothing to show</h1>;
    }

    return (
        <Container>
            <h1>{data.title}</h1>
            <p>{data.description}</p>

        </Container>
    );

}

