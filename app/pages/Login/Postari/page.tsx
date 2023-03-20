import React from 'react';
import { useRouter } from 'next/router';
import { useGlobalContextPost } from '../../../Context/postStore';
import { useEffect } from 'react';
import { Spinner } from '../../../components/Spinner';
import { UserInfos } from '../../../components/UserInfos';
import { Container, Card } from '../../../components/Container';
import { LinkParola } from '../../../components/LinkParola'; 


function Postari() {
    const router = useRouter();
    const { posts, isLoading, isError, message, getAllPosts } = useGlobalContextPost();
    
    const { token } = navigation;
    
    useEffect(() => {
        if (isError) {
        console.log(message);
        }
    
        if (!navigation) {
        router.push('/login');
        }
    
        getAllPosts();
    
        return () => {};
    }, [token, router, isError, message, navigation]);
    
    if (isLoading) {
        return <Spinner />;
    }
    
    return (
        <>
        <UserInfos />
        <Container>
            <Card>
            <section className="heading">
                <h1>Salut {navigation && navigation.name}</h1>
                
                <LinkParola />
                <p>Updateaza continutul paginii:</p>
            </section>
    
            <RotatieForm />
    
            <section className="content">
                <RotatieItem />
            </section>
            </Card>
        </Container>
        </>
    );
    }

