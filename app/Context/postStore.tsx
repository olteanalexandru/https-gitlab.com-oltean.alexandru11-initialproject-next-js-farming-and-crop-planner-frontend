import { createContext, useContext, Dispatch , SetStateAction , useState } from 'react';

import axios from 'axios'

const API_URL = 'http://localhost:5000/api/posts/'
const API_URL_post = 'http://localhost:5000/api/posts/post/'

type DataType = {
    id : string;
    title: string;
    brief: string;
    description: string;
    image: string;
    user: string;
    token: string;
}

interface ContextProps {
    data: DataType;
    setData: Dispatch<SetStateAction<DataType>>;
    error: string;
    setError: Dispatch<SetStateAction<string>>;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    post: (title: string, brief: string, description: string, image: string) => Promise<void>;
    modify: (id: string , title: string, brief: string, description: string, image: string) => Promise<void>;
    deletePost: (id: string) => Promise<void>;
}

interface Props {
    children: React.ReactNode;
    }

const GlobalContext = createContext<ContextProps>({} as ContextProps);

export const GlobalContextProvider: React.FC<Props> = ({ children }) => {
    const [data, setData] = useState<DataType>({id: '' ,title: '', brief: '', description: '', image: '', user: '', token: '' });
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const post = async (title: string, brief: string, description: string, image: string) => {
        setLoading(true);
        try {
            const response = await axios.post(API_URL_post , {
                title,
                brief,
                description,
                image,
            });
            const data = await response.data;
            if (data.error) {
                setError(data.error);
                setLoading(false);
            } else {
                setData(data);
                setLoading(false);
                localStorage.setItem('post', JSON.stringify(response.data))
            }
        } catch (error:any ) {
            setError(error.response.data.message);
            setLoading(false);
        }
    }

    const modify = async (id: string , title: string, brief: string, description: string, image: string) => {
        setLoading(true);
        try {
            const response = await axios.put(API_URL_post + id , {
                title,
                brief,
                description,
                image,
            });
            const data = await response.data;
            if (data.error) {
                setError(data.error);
                setLoading(false);
            } else {
                setData(data);
                setLoading(false);
                localStorage.setItem('post', JSON.stringify(response.data))
            }
        } catch (error:any ) {
            setError(error.response.data.message);
            setLoading(false);
        }
    }

    const deletePost = async (id: string) => {
        setLoading(true);
        try {
            const response = await axios.delete(API_URL_post + id);
            const data = await response.data;
            if (data.error) {
                setError(data.error);
                setLoading(false);
            } else {
                setData(data);
                setLoading(false);
                localStorage.setItem('post', JSON.stringify(response.data))
            }
        } catch (error:any ) {
            setError(error.response.data.message);
            setLoading(false);
        }
    }

    return (
        <GlobalContext.Provider value={{ data, setData, error, setError, loading, setLoading, post, modify, deletePost }}>
            {children}
        </GlobalContext.Provider>
    );
};
