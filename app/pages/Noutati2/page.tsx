
"use client"
import {  useEffect } from 'react';
import Spinner from '../../Crud/Spinner';
import Continut from '../../Crud/GetAllInRotatie/page';
import GridGenerator from '../../Componente/GridGen'
import { useGlobalContextPost } from '../../Context/postStore';

export default function Noutati() {


  const { 
        data: posts,
        loading: isLoading,
        error: isError,
        getAllPosts,
   } = useGlobalContextPost();

    useEffect(() => {
        getAllPosts();
    }, []);

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{isError}</h1>;
    }
 if (!posts) {
        return <h1>Nothing to show</h1>;
    }


  type Post = {
    id : string;
    title: string;
    brief: string;
    description: string;
    image: string;
    };




return (

<div className="container text-center bg-grey border-colorat" style={{'paddingBottom':'4rem'}}>
  <h2 style={{marginBottom:' 3rem'}}>Ramai informat</h2>
    <GridGenerator>
        {posts.map((post: Post) => {
            return (
                <Continut crop={post} key={post.id} />
            );
        })}
    </GridGenerator>
    
            
           
      
</div>

)
}