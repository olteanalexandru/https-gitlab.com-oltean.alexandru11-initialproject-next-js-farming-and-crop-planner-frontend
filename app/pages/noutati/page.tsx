
"use client"
import { useEffect } from 'react';
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
    <div className="container">
      <h1 className="mt-5 mb-4">Noutati:</h1>

      {data.length > 0 ? (
        <div>
          {data.map((data) => {
            return (
              <div key={data._id} className="mb-5 border-bottom pb-4">
                <Continut data={data} />
              </div>
            );
          })}
        </div>
      ) : (
        <h3 className="mb-5">Nu sa adaugat nici un continut pana acum</h3>
      )}
    </div>
  );
}
