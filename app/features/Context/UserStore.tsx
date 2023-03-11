'use client';

import { createContext, useContext, Dispatch , SetStateAction , useState } from 'react';
import axios from 'axios'
// PATHS: 'auth/register' , 'auth/modifica' , 'auth/login' , 'auth/logout' 
const API_URL = 'http://localhost:5000/api/users/'

type DataType = {
    id : string;
    rol: string;
    name : string;
    email: string;
    password: string;
    token: string;
}


type Err = {
    error: string;
}

interface ContextProps {
    data: DataType;
    setData: Dispatch<SetStateAction<DataType>>;
    error: string;
    setError: Dispatch<SetStateAction<string>>;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    register: (rol: string, name: string, email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    modify: (email: string, password: string) => Promise<void>;
}

interface Props {
    children: React.ReactNode;
  }


const GlobalContext = createContext<ContextProps>({} as ContextProps);

export const GlobalContextProvider: React.FC<Props> = ({ children }) => {
    const [data, setData] = useState<DataType>({id: '' ,rol: '' ,name: '', email: '', password: '', token: '' });
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    // const register = async (rol: string, name: string, email: string, password: string  ) => {
    //     setLoading(true);
    //     try {
    //         const response = await fetch(API_URL , {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({rol, name, email, password}),
    //         });
    //         const data = await response.json();
    //         if (data.error) {
    //             setError(data.error);
    //             setLoading(false);
    //         } else {
    //             setData(data);
    //             setLoading(false);
    //             localStorage.setItem('user', JSON.stringify(response.data))
    //         }
    //     } catch (error: unknown) {
    //         setError(error);
    //         setLoading(false);
    //     }
    // };

    const register = async (rol: string, name: string, email: string, password: string  ) => {
        setLoading(true);
        try {
            const response = await axios.post(API_URL , {
                rol,
                name,
                email,
                password,
            });
            const data = await response.data;
            if (data.error) {
                setError(data.error);
                setLoading(false);
            } else {
                setData(data);
                setLoading(false);
                localStorage.setItem('user', JSON.stringify(response.data))
            }
        } catch (error: unknown) {
            setError(error);
            setLoading(false);
        }
    };



    // const login = async (email: string, password: string) => {
    //     setLoading(true);
    //     try {
    //         const response = await fetch(API_URL + 'login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ email, password }),

    //         });
    //         const data = await response.json();
    //         if (data.error) {
    //             setError(data.error);
    //             setLoading(false);
    //         } else {
    //             setData(data);
    //             setLoading(false);
    //             localStorage.setItem('user', JSON.stringify(response.data))
    //         }
    //     } catch (error) {
    //         setError(error.message.toString());
    //         setLoading(false);
    //     }
    // };

    const login = async (email: string, password: string) => {
        setLoading(true);
        try {
            const response = await axios.post(API_URL + 'login', {
                email,
                password,
            });
            const data = await response.data;
            if (data.error) {
                setError(data.error);
                setLoading(false);
            } else {
                setData(data);
                setLoading(false);
                localStorage.setItem('user', JSON.stringify(response.data))
            }
        } catch (error) {
            setError(error.message.toString());
            setLoading(false);
        }
    };


    const logout = () => {
        setData({id:'', email: '', password: '', role: '', token: '' });
        localStorage.removeItem('user');
    };

    const modify = async (email: string, password: string) => {
        setLoading(true);
        try {
            const response = await fetch(API_URL + 'modifica', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (data.error) {
                setError(data.error);
                setLoading(false);
            } else {
                setData(data);
                setLoading(false);
                localStorage.setItem('user', JSON.stringify(response.data))
            }
        } catch (error) {
            setError(error.message.toString());
            setLoading(false);
        }
    };

    return (
        <GlobalContext.Provider
            value={{
                data,
                setData,
                error,
                setError,
                loading,
                setLoading,
                register,
                login,
                logout,
                modify,
            }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
