'use client';
import { createContext, useContext, Dispatch, SetStateAction, useState } from 'react';
import axios from 'axios'

const API_URL = 'http://localhost:5000/api/users/'

type DataType = {
    id: string;
    rol: string;
    name: string;
    email: string;
    password: string;
    token: string;
    fermierUsers?: any[];
}

interface ContextProps {
    data: DataType;
    setData: Dispatch<SetStateAction<DataType>>;
    error: string;
    setError: Dispatch<SetStateAction<string>>;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    fetchFermierUsers: () => Promise<void>;
    register: (rol: string, name: string, email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    modify: (id: string, password: string) => Promise<void>;
    deleteUser: (id: string) => Promise<void>;
    loadingFermierUsers: boolean;
    setLoadingFermierUsers: Dispatch<SetStateAction<boolean>>;
    fermierUsers: any[];
    setFermierUsers: Dispatch<SetStateAction<any[]>>;
    
}

interface Props {
    children: React.ReactNode;
}

const GlobalContext = createContext<ContextProps>({} as ContextProps);

export const GlobalContextProvider: React.FC<Props> = ({ children }) => {
    const [data, setData] = useState<DataType>({ id: '', rol: '', name: '', email: '', password: '', token: '' , fermierUsers: [],});
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingFermierUsers, setLoadingFermierUsers] = useState(false);
    const [fermierUsers, setFermierUsers] = useState([]);

    const register = async (rol: string, name: string, email: string, password: string) => {
        setLoading(true);
        try {
            const response = await axios.post(API_URL, {
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
        } catch (error: any) {
            setError(error);
            setLoading(false);
        }
    };

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
        } catch (error: any) {
            setError(error.message.toString());
            setLoading(false);
        }
    };

    const logout = () => {
        setData({ id: '', rol: '', name: '', email: '', password: '', token: '', fermierUsers: [], });
        localStorage.removeItem('user');
    };

    const modify = async (id: string, password: string) => {
        setLoading(true);
        try {
            const response = await axios.put(API_URL, {
                _id: id,
                password: password,
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
        } catch (error: any) {
            setError(error.message.toString());
            setLoading(false);
        }
    };

    const fetchFermierUsers = async () => {
        try {
          setLoadingFermierUsers(true);
          const response = await axios.get(API_URL + 'fermier', {
            headers: {
              Authorization: `Bearer ${data.token}`,
            },
          });
          setFermierUsers(response.data);
        } catch (error) {
          setError('Error fetching Fermier users');
        } finally {
          setLoadingFermierUsers(false);
        }
      };
      
      const deleteUser = async (id: string) => {
        try {
          setLoading(true);
          await axios.delete(API_URL + id, {
            headers: {
              Authorization: `Bearer ${data.token}`,
            },
          });
          setLoading(false);
          setData({ ...data, fermierUsers: data?.fermierUsers?.filter((user: any) => user._id !== id) });
        } catch (error) {
          setError('Error deleting user');
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
                fetchFermierUsers,
                deleteUser,
                loadingFermierUsers,
                fermierUsers,

            }}>
            {children}
            </GlobalContext.Provider>
);
};

export const useGlobalContext = () => {
return useContext(GlobalContext);
};