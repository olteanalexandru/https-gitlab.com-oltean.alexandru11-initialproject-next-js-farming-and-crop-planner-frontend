'use client';

import { createContext, useContext, Dispatch , SetStateAction , useState } from 'react';

import axios, { AxiosRequestConfig } from 'axios'

//user store
import { useGlobalContext } from '../../features/Context/UserStore';



const API_URL = 'http://localhost:5000/api/goals/'
const API_URL_goals = 'http://localhost:5000/api/goals/Goals/'




type DataType = {
  title: string
  description: string
  category: string
  startDate: string
  endDate: string
  status: string
  progress: number
  priority: string
  user: string
  programare: string
  token: string

}


type Err = {
  error: string;
}



interface ContextProps {
  goals: any;
  setGoals: Dispatch<SetStateAction<any>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
  isSuccess: boolean;
  setIsSuccess: Dispatch<SetStateAction<boolean>>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  createGoal: (data: DataType) => Promise<void>;
  getGoals: () => Promise<void>;
  deleteGoal: (id: string) => Promise<void>;
  programare: (id: string, programare: string, token: string ) => Promise<void>;
  SinglePage: (id: string) => Promise<void>;
  getAllGoals: () => Promise<void>;
  token : any;
setToken : Dispatch<SetStateAction<any>>;


}


const ContextProps  = createContext<ContextProps>({
    goals: [],
    setGoals: () => {},
    isLoading: false,
    setIsLoading: () => {},
    isError: false,
    setIsError: () => {},
    isSuccess: false,
    setIsSuccess: () => {},
    message: '',
    setMessage: () => {},
    createGoal: () => Promise.resolve(),
    getGoals: () => Promise.resolve(),
    deleteGoal: () => Promise.resolve(),
    programare: () => Promise.resolve(),
    SinglePage: () => Promise.resolve(),
    getAllGoals: () => Promise.resolve(),
    token: [],
    setToken: () => {},



}


)

interface Props {
    children: React.ReactNode;
  }


  const GlobalContext = createContext<ContextProps>({} as ContextProps);

 export const GlobalContextProvider: React.FC<Props> = ({ children }) => {

   
    const [goals, setGoals] = useState([]);
    const [token, setToken] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState('');
    
    

    const createGoal = async (data: DataType , token: string ) => {
        setIsLoading(true);
        try {
        const response = await axios.post(API_URL, data, {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        });
        if (response.status === 201) {
            setIsSuccess(true);
            setMessage('Goal created successfully');
        } else {
            setIsError(true);
            setMessage('Error creating goal');
        }
        } catch (err) {
        setIsError(true);
        setMessage('Error creating goal');
        }
        setIsLoading(false);
    };

    
        


    
    const getGoals = async () => {
        setIsLoading(true);
        try {
        const response = await fetch(API_URL);
        if (response.ok) {
            const data = await response.json();
            setGoals(data);
        } else {
            setIsError(true);
            setMessage('Error getting goals');
        }
        } catch (err) {
        setIsError(true);
        setMessage('Error getting goals');
        }
        setIsLoading(false);
    };
    
    const deleteGoal = async (id: string) => {
        setIsLoading(true);
        try {
        const response = await fetch(`${API_URL}${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            setIsSuccess(true);
            setMessage('Goal deleted successfully');
        } else {
            setIsError(true);
            setMessage('Error deleting goal');
        }
        } catch (err) {
        setIsError(true);
        setMessage('Error deleting goal');
        }
        setIsLoading(false);
    };
    


    const programare= async (id: string, programare: string , _id: string , token: string ) => {

        const response = await axios.post(API_URL_goals + id, { programare : programare , _id: _id, }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

    const goals = await response.data;
    setGoals(goals);
    }








    const SinglePage = async (id: string) => {
        setIsLoading(true);
        try {
        const response = await fetch(`${API_URL_goals}${id}`);
        if (response.ok) {
            const data = await response.json();
            setGoals(data);
        } else {
            setIsError(true);
            setMessage('Error getting goals');
        }
        } catch (err) {
        setIsError(true);
        setMessage('Error getting goals');
        }
        setIsLoading(false);
    }

    const getAllGoals = async () => {
        setIsLoading(true);
        try {
        const response = await fetch(API_URL_goals);
        if (response.ok) {
            const data = await response.json();
            setGoals(data);
        } else {
            setIsError(true);
            setMessage('Error getting goals');
        }
        } catch (err) {
        setIsError(true);
        setMessage('Error getting goals');
        }
        setIsLoading(false);
    }

    return (
        <GlobalContext.Provider
        value={{
            goals,
            setGoals,
            isLoading,
            setIsLoading,
            isError,
            setIsError,
            isSuccess,
            setIsSuccess,
            message,
            setMessage,
            createGoal,
            getGoals,
            deleteGoal,
            programare,
            SinglePage,
            getAllGoals,
        }}
        >
        {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContextGoal = () => {
    return useContext(GlobalContext);
}



// Path: app\features\Context\culturaStore.tsx