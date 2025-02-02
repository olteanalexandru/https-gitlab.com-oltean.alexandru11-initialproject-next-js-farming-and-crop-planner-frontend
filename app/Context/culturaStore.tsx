'use client';
import { createContext, useContext, Dispatch, SetStateAction, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/crops/';
const API_URL_crops = 'http://localhost:5000/api/crops/Crops/';
const API_URL_cropRotation = 'http://localhost:5000/api/crops/cropRotation/';


type DataType = {
<<<<<<< HEAD
  _id: string;
  cropName: string;
  cropType: string;
  cropVariety: string;
  plantingDate: string;
  harvestingDate: string;
  description: string;
  imageUrl: string;
  soilType: string;
  fertilizers: string[];
  pests: string[];
  diseases: string[];
  selectare: boolean;
  user: string;
  token: string;
  ItShouldNotBeRepeatedForXYears: number;
};

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
  createCrop: (data: DataType, token: string) => Promise<void>;
  getCrops: (token: string) => Promise<void>;
  deleteCrop: (id: string, token: string) => Promise<void>;
  selectare: (id: string, selectare: boolean, _id: string, token: string) => Promise<void>;
  SinglePage: (id: string) => Promise<void>;
  getAllCrops: () => Promise<void>;
  updateCrop: (id: string, data: DataType, token: string) => Promise<void>;
  cropRotation: any;
  setCropRotation: Dispatch<SetStateAction<any>>;
  generateCropRotation: (fieldSize: number, numberOfDivisions: number, token: string) => Promise<void>;
  getCropRotation: (
    fieldSize: number,
    numberOfDivisions: number,
    token: string
  ) => Promise<void>;
}

const ContextProps = createContext<ContextProps>({
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
  updateCrop: () => Promise.resolve(),
  cropRotation: [],
  setCropRotation: () => {},
  generateCropRotation: () => Promise.resolve(),
  getCropRotation: () => Promise.resolve(),
});
=======
    _id: string;
    cropName: string;
    cropType: string;
    cropVariety: string;
    plantingDate: string;
    harvestingDate: string;
    description: string;
    imageUrl: string;
    soilType: string;
    climate: string;
    fertilizers: string[];
    pests: string[];
    diseases: string[];
    selectare: boolean;
    user: string;
    token: string;
  };
  
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
    createCrop: (data: DataType, token: string) => Promise<void>;
    getCrops: (token: string) => Promise<void>;
    deleteCrop: (id: string, token: string) => Promise<void>;
    selectare: (id: string, selectare: boolean, _id: string, token: string) => Promise<void>;
    SinglePage: (id: string) => Promise<void>;
    getAllCrops: () => Promise<void>;
    updateCrop: (id: string, data: DataType, token: string) => Promise<void>;
  }
  
  const ContextProps = createContext<ContextProps>({
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
    updateCrop: () => Promise.resolve(),
  });
  
>>>>>>> c7e98a45e20e56d686e7a047d511b9ffbc0495f0

interface Props {
  children: React.ReactNode;
}

const GlobalContext = createContext<ContextProps>({} as ContextProps);
export const GlobalContextProvider: React.FC<Props> = ({ children }) => {
  const [crops, setCrops] = useState<DataType[]>([]);
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [cropRotation, setCropRotation] = useState([]);

<<<<<<< HEAD
  const createCrop = async (data: DataType, token: string) => {
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
=======
  const GlobalContext = createContext<ContextProps>({} as ContextProps);
 export const GlobalContextProvider: React.FC<Props> = ({ children }) => {

   
    const [crops, setCrops] = useState<DataType>({_id: '', cropName: '', cropType: '', cropVariety: '', plantingDate: '', harvestingDate: '', description: '', imageUrl: '', soilType: '', climate: '', fertilizers: [], pests: [], diseases: [], user: '', token: ''})
    const [token, setToken] = useState([]);
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
>>>>>>> c7e98a45e20e56d686e7a047d511b9ffbc0495f0
        setIsError(true);
        setMessage('Error creating crop');
      }
    } catch (err) {
      setIsError(true);
      setMessage('Error creating crop');
    }
    setIsLoading(false);
  };

<<<<<<< HEAD
  const updateCrop = async (id: string, data: DataType, token: string) => {
    setIsLoading(true);
    try {
      const response = await axios.put(API_URL + id, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setIsSuccess(true);
        setMessage('Crop updated successfully');
      } else {
        setIsError(true);
        setMessage('Error updating crop');
      }
    } catch (err) {
      setIsError(true);
      setMessage('Error updating crop');
    }
    setIsLoading(false);
  };

  const getCrops = async (token: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setCrops(response.data);
      } else {
=======
    const updateCrop = async (id: string , data: DataType , token: string ) => {
        setIsLoading(true);
        try {
        const response = await axios.put(API_URL + id, data, {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        });
        if (response.status === 200) {
            setIsSuccess(true);
            setMessage('Crop updated successfully');
        } else {
            setIsError(true);
            setMessage('Error updating crop');
        }
        } catch (err) {
        setIsError(true);
        setMessage('Error updating crop');
        }
        setIsLoading(false);
    };



    
    const getCrops = async ( 
        token:string
    ) => {
        setIsLoading(true);
        try {
        const response = await axios.get(API_URL, {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        });
        if (response.status === 200) {
            setCrops(response.data);
        } else {
            setIsError(true);
            setMessage('Error getting crops');
        }
        } catch (err) {
>>>>>>> c7e98a45e20e56d686e7a047d511b9ffbc0495f0
        setIsError(true);
        setMessage('Error getting crops');
      }
    } catch (err) {
      setIsError(true);
      setMessage('Error getting crops');
    }
    setIsLoading(false);
  };

<<<<<<< HEAD
  const deleteCrop = async (id: string, token: string) => {
    setIsLoading(true);
    try {
      const response = await axios.delete(API_URL + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
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
=======
    



    
    const deleteCrop = async (id: string, token: string) => {
        setIsLoading(true);
        try {
        const response = await axios.delete(API_URL + id, {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        });
        if (response.status === 200) {
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

    
>>>>>>> c7e98a45e20e56d686e7a047d511b9ffbc0495f0

  const selectare = async (id: string, selectare: boolean, _id: string, token: string) => {
    const response = await axios.post(API_URL_crops + id, { selectare: selectare, _id: _id }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const crops = await response.data;
    setCrops(crops);
  };

  const SinglePage = async (id: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(API_URL_crops + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        const data = await response.data;
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

  const getAllCrops = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(API_URL_crops, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        const data = await response.data;
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

  const generateCropRotation = async (
    fieldSize: number,
    numberOfDivisions: number,
    token: string
  ) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${API_URL_cropRotation}`,
        { fieldSize, numberOfDivisions },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 200) {
        setCropRotation(response.data);
      } else {
        setIsError(true);
        setMessage('Error generating crop rotation');
      }
    } catch (err) {
      setIsError(true);
      setMessage('Error generating crop rotation');
    }
    setIsLoading(false);
  };
  

  const getCropRotation = async (
    fieldSize: number,
    numberOfDivisions: number,
    token: string
  ) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${API_URL_cropRotation}?fieldSize=${fieldSize}&numberOfDivisions=${numberOfDivisions}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        setCropRotation(response.data);
      } else {
        setIsError(true);
        setMessage('Error getting crop rotation');
      }
    } catch (err) {
      setIsError(true);
      setMessage('Error getting crop rotation');
    }
    setIsLoading(false);
  };

<<<<<<< HEAD
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
        updateCrop,
        cropRotation,
        setCropRotation,
        getCropRotation,
        generateCropRotation,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
=======


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
            updateCrop,
        }}
        >
        {children}
        </GlobalContext.Provider>
    );
>>>>>>> c7e98a45e20e56d686e7a047d511b9ffbc0495f0
};

export const useGlobalContextCrop = () => {
  return useContext(GlobalContext);
};

// Path: app\features\Context\culturaStore.tsx