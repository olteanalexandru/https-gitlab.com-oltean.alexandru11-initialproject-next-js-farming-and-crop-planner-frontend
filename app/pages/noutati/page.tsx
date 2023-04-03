
"use client"
import {  useEffect } from 'react';
import Spinner from '../../Crud/Spinner';
import { useGlobalContextPost } from '../../Context/postStore';
import Continut from '../../Crud/GetAllPosts/page';


export default function Noutati() {
    const { 
       data,
       loading,
       getAllPosts
      
      } = useGlobalContextPost();

    useEffect(() => {
        getAllPosts();
    } , []);
    if (loading) {
        return <Spinner />;
        
    }


    // type data = {
    //     _id: string
    //     title: string
    //     description: string
    //     category: string
    //     startDate: string
    // }


    return (
        <div>
            <h1>Noutati:</h1>
      <br />
      <br />
      <br />

    
          

{data.length > 0 ? (
    <div  >
          

            {data.map((data) => {
              return (
                <div style={{marginBottom:'4rem', minHeight:'200px' }}  >
                <Continut  key={data._id} data={data} />
                <p>-----------------------------------------------------------------------------------------------------------------------------------</p>
                </div>
              );
            })}
            

             
              </div> 
            ) : (
              <h3>Nu sa adaugat nici un continut pana acum</h3>
            )}
            <br />
            <br />
        </div>
    );
}