
"use client"
import {  useEffect } from 'react';
import Spinner from '../../Crud/Spinner';
import { useGlobalContextPost } from '../../Context/postStore';
import Continut from '../../Crud/GetAllPosts/page';

export default function Noutati() {
    const { data, loading, getAllPosts } = useGlobalContextPost();
    useEffect(() => {
        getAllPosts();
    }, []);
    if (loading) {
        return <Spinner />;
    }
    return (
        <div>
          
                {data.map((data: any) => {
                    return <Continut key={data.id} data ={data} />;
                })}
            
        </div>
    );
}