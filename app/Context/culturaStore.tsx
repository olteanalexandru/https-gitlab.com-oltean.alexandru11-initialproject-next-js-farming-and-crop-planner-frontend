'use client';

import { createContext, useContext, Dispatch , SetStateAction , useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/crops/'
const API_URL_crops = 'http://localhost:5000/api/crops/Crops/'


type DataType = {

  title: string
  description: string
  image: string
  text: string
  category: string
  startDate: string
  endDate: string
  status: string
  progress: number
  priority: string
  user: string
  selectare: boolean
  token: string
}


interface ContextProps {
  crops: any;
  setCrops: Dispatch<SetStateAction<any>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
  isSuccess: boolean;
  setIsSuccess: Dispatch<SetStateAction<boolean>>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  createCrop: (data: DataType,token:string ) => Promise<void>;
  getCrops: () => Promise<void>;
  deleteCrop: (id: string) => Promise<void>;
  selectare: (id: string, selectare: boolean, _id:string, token: string ) => Promise<void>;
  SinglePage: (id: string) => Promise<void>;
  getAllCrops: () => Promise<void>;
}


const ContextProps  = createContext<ContextProps>({
    crops: [],
    setCrops: () => {},
    isLoading: false,
    setIsLoading: () => {},
    isError: false,
    setIsError: () => {},
    isSuccess: false,
    setIsSuccess: () => {},
    message: '',
    setMessage: () => {},
    createCrop: () => Promise.resolve(),
    getCrops: () => Promise.resolve(),
    deleteCrop: () => Promise.resolve(),
    selectare: () => Promise.resolve(),
    SinglePage: () => Promise.resolve(),
    getAllCrops: () => Promise.resolve(),
}
)

interface Props {
    children: React.ReactNode;
  }


 const GlobalContext = createContext<ContextProps>({} as ContextProps);
 export const GlobalContextProvider: React.FC<Props> = ({ children }) => {

   
    const [crops, setCrops] = useState<DataType>({title: '', description: '', image: '', text: '', category: '', startDate: '', endDate: '', status: '', progress: 0, priority: '', user: '', selectare: false, token: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState('');

    
    

    const createCrop = async (data: DataType , token: string ) => {
        setIsLoading(true);
        try {
        const response = await axios.post(API_URL, data, {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        });
        if (response.status === 201) {
            setIsSuccess(true);
            setMessage('Crop created successfully');
        } else {
            setIsError(true);
            setMessage('Error creating crop');
        }
        } catch (err) {
        setIsError(true);
        setMessage('Error creating crop');
        }
        setIsLoading(false);
    };

    
    const getCrops = async () => {
        setIsLoading(true);
        try {
        const response = await fetch(API_URL);
        if (response.ok) {
            const data = await response.json();
            setCrops(data);
        } else {
            setIsError(true);
            setMessage('Error getting crops');
        }
        } catch (err) {
        setIsError(true);
        setMessage('Error getting crops');
        }
        setIsLoading(false);
    };
    
    const deleteCrop = async (id: string) => {
        setIsLoading(true);
        try {
        const response = await fetch(`${API_URL}${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            setIsSuccess(true);
            setMessage('Crop deleted successfully');
        } else {
            setIsError(true);
            setMessage('Error deleting crop');
        }
        } catch (err) {
        setIsError(true);
        setMessage('Error deleting crop');
        }
        setIsLoading(false);
    };
    


    const selectare= async (id: string, selectare: boolean , _id: string , token: string ) => {

        const response = await axios.post(API_URL_crops + id, { selectare : selectare , _id: _id, }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

    const crops = await response.data;
    setCrops(crops);
    }


    const SinglePage = async (id: string) => {
        setIsLoading(true);
        try {
        const response = await fetch(`${API_URL_crops}${id}`);
        if (response.ok) {
            const data = await response.json();
            setCrops(data);
        } else {
            setIsError(true);
            setMessage('Error getting crops');
        }
        } catch (err) {
        setIsError(true);
        setMessage('Error getting crops');
        }
        setIsLoading(false);
    }

    const getAllCrops = async () => {
        setIsLoading(true);
        try {
        const response = await fetch(API_URL_crops);
        if (response.ok) {
            const data = await response.json();
            setCrops(data);
        } else {
            setIsError(true);
            setMessage('Error getting crops');
        }
        } catch (err) {
        setIsError(true);
        setMessage('Error getting crops');
        }
        setIsLoading(false);
    }

    return (
        <GlobalContext.Provider
        value={{
            crops,
            setCrops,
            isLoading,
            setIsLoading,
            isError,
            setIsError,
            isSuccess,
            setIsSuccess,
            message,
            setMessage,
            createCrop,
            getCrops,
            deleteCrop,
            selectare,
            SinglePage,
            getAllCrops,
        }}
        >
        {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContextCrop = () => {
    return useContext(GlobalContext);
}



// Path: app\features\Context\culturaStore.tsx
