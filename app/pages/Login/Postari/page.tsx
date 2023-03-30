"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { useGlobalContextPost } from '../../../Context/postStore';
import { useEffect } from 'react';
import  Spinner  from '../../../Crud/Spinner';
import { UserInfos } from '../../Login/Dashboard/userInfos';
import { Container, Card } from 'react-bootstrap';
import PostForm from '../../../Crud/PostForm';
import Continut from '../../../Crud/GetAllPosts/page';



function Postari() {
    const { data, loading, getAllPosts } = useGlobalContextPost();
   
    const router = useRouter();


    useEffect(() => {
        localStorage.getItem('user') ?  getAllPosts() : router.push('/login');
    }, [router]);
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
           {Array.isArray(data) ? <h1>Postari</h1> : <h1>Nu exista postari</h1>}
                {/* {data.map((data: any) => {
                    return <Continut key={data.id} data={data} />;
                })} */}
            </Container>
        </div>
    );
}

export default Postari;