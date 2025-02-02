"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { useGlobalContextPost } from '../../../Context/postStore';
import { useGlobalContext} from '../../../Context/UserStore';
import { useEffect } from 'react';
import Spinner from '../../../Crud/Spinner';
import { UserInfos } from '../../Login/Dashboard/userInfos';
import { Container, Card, Button } from 'react-bootstrap';
import PostForm from '../../../Crud/PostForm';
import Continut from '../../../Crud/GetAllPosts/page';

function Postari() {
    const { data, loading, getAllPosts, deletePost } = useGlobalContextPost();
    const { data: user } = useGlobalContext();
    const token = user.token;

    const router = useRouter();

    useEffect(() => {
        localStorage.getItem('user') ? getAllPosts() : router.push('/login');
    }, [router, user  ]);
    if (loading) {
        return <Spinner />;
    }

    return (
        <div>
            <Container>
                <Card>
                    <Card.Header>
                        <UserInfos />
                    </Card.Header>
                    <Card.Body>
                        <PostForm />
                    </Card.Body>
                </Card>
            </Container>
            <Container>
            </Container>

            <div>
                <h1>All Posts</h1>
                <ul>
                    {Array.isArray(data) && data.map((post) => (
                    
                        <li key={post._id}>
                            <h2>{post.title}</h2>
                            <p>{post.brief}</p>
                            <Button variant="danger" onClick={() => deletePost(post._id,token)}>
                                Delete Post
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>

        </div>

    );
}

export default Postari;
