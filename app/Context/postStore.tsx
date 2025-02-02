'use client';
import { createContext, useContext, Dispatch , SetStateAction , useState } from 'react';
import axios from 'axios'

const API_URL = 'http://localhost:5000/api/posts/'
const API_URL_post = 'http://localhost:5000/api/posts/posts/'

type DataType = {
    id: string;
    _id: string;
    title: string;
    brief: string;
    description: string;
    image: string;
    user: string;
    token: string;
}

interface ContextProps {
    data: any;
    setData: Dispatch<SetStateAction<any>>;
    error: string;
    setError: Dispatch<SetStateAction<string>>;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    createPost: ( data: DataType , token:string   ) => Promise<void>;
    updatePost: (id: string , title: string, brief: string, description: string, image: string) => Promise<void>;
    deletePost: (_id: string, token:string) => Promise<void>;
    getPost: (id: string) => Promise<void>;
    getAllPosts: () => Promise<void>;
}

const ContextProps  = createContext<ContextProps>({
    data: [],
    setData: () => {},
    error: '',
    setError: () => {},
    loading: false,
    setLoading: () => {},
    createPost: () => Promise.resolve(),
    modify: () => Promise.resolve(),
    deletePost: () => Promise.resolve(),
    getPost: () => Promise.resolve(),
    getAllPosts: () => Promise.resolve(),
});


interface Props {
    children: React.ReactNode;
    }



const GlobalContext = createContext<ContextProps>({} as ContextProps);
export const GlobalContextProvider: React.FC<Props> = ({ children }) => {

    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);


    const createPost = async ({ title, brief, description, image }: any, token: string) => {
        setLoading(true);
        try {
          const response = await axios.post(API_URL, {
            title,
            brief,
            description,
            image,
          }, {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          });
          const data = await response.data;
          if (data.error) {
            setError(data.error);
            setLoading(false);
            console.log(data.error)
          } else {
            setData((prevData) => [...prevData, data]);
            setLoading(false);
            localStorage.setItem('post', JSON.stringify(response.data))
          }
        } catch (error: any) {
          setError(error.response.data.message);
          setLoading(false);
        }
      }


    const updatePost = async (id ,{ title, brief, description, image }: any, token: string) => {
        setLoading(true);
        try {
            const response = await axios.put(API_URL + id, {
                title,
                brief,
                description,
                image,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            const data = await response.data;
            if (data.error) {
                setError(data.error);
                setLoading(false);
            } else {
                setData(data);
                setLoading(false);
            }
        } catch (error:any ) {
            setError(error.response.data.message);
            setLoading(false);
        }
    }
 


    //include bearer token in header

    const deletePost = async (_id: string, token:string) => {
        setLoading(true);
        try {
            const response = await axios.delete(API_URL + _id, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            const data = await response.data;
            if (data.error) {
                setError(data.error);
                setLoading(false);
            } else {
                setData(data);
                setLoading(false);
            }
        } catch (error:any ) {
            setError(error.response.data.message);
            setLoading(false);
        }
    }




    const getPost = async (id: string) => {
        setLoading(true);
        try {
            const response = await axios.get(API_URL_post + id);
            const data = await response.data;
            if (data.error) {
                setError(data.error);
                setLoading(false);
            } else {
                setData(data);
                setLoading(false);
               
            }
        } catch (error:any ) {
            setError(error.response.data.message);
            setLoading(false);
        }
    }
    
    const getAllPosts = async () => {
        setLoading(true);
        try {
            const response = await axios.get(API_URL_post)
            const data = await response.data;
            if (data.error) {
                setError(data.error);
                setLoading(false);
            } else {
                setData(data);
                setLoading(false);
            }
        } catch (error:any ) {
            setError(error.response.data.message);
            setLoading(false);
        }
    }

      



    return (
        <GlobalContext.Provider
         value={{ 
        data,
        setData,
        error,
        setError,
        loading,
        setLoading,
        getPost,
        getAllPosts,
        createPost,
        updatePost,
        deletePost,
         }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContextPost = () =>{
    return useContext(GlobalContext);
} 


