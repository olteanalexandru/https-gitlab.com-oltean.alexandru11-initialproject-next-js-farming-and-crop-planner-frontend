"use client"
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Form, Container, Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { useGlobalContext } from '../../../Context/UserStore';
import { useGlobalContextCrop } from '../../../Context/culturaStore';

function SinglePag(): JSX.Element {
  const { data: userData } = useGlobalContext();
  const {
    crops,
    isLoading,
    isError,
    message,
    selectare,
    SinglePage,
    deleteCrop,
    updateCrop,
  } = useGlobalContextCrop();

  const navigate = useRouter();
  const _id = useSearchParams().get('crop') as string;

  const token = userData.token;
  const LocaluserId = userData._id;
  const [selectarea, setSelectarea] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [updatedCrop, setUpdatedCrop] = useState({
    cropName: '',
    ItShouldNotBeRepeatedForXYears: '',
    description: '',
  });

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    SinglePage(_id);
  }, [isError, message, _id]);

  useEffect(() => {
    if (crops) {
      setUpdatedCrop({
        cropName: crops.cropName,
        ItShouldNotBeRepeatedForXYears: crops.ItShouldNotBeRepeatedForXYears,
        description: crops.description,
      });
    }
  }, [crops]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{message}</h1>;
  }

  const handleDelete = async () => {
    try {
      await deleteCrop(_id, token);
      console.log('Crop deleted');
      navigate.push('/pages/Rotatie');
    } catch (error) {
      console.error('Error deleting crop:', error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateCrop(_id, updatedCrop, token);
    setEditMode(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCrop({ ...updatedCrop, [name]: value });
  };

  const canEdit = userData.rol === 'Administrator' || userData._id === crops.user;



const onSubmit = async (e: React.FormEvent<HTMLFormElement>, newSelectArea: boolean) => {
  e.preventDefault();
  if (userData && userData.rol === "Fermier") {
    await selectare(_id, newSelectArea, LocaluserId, token);
    setSelectarea(newSelectArea);
  }
}

  return (
    <Container>
      {editMode ? (
        <Form onSubmit={handleUpdate}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="cropName"
              value={updatedCrop.cropName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nu se va repeta pentru x ani:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="ItShouldNotBeRepeatedForXYears"
              value={updatedCrop.ItShouldNotBeRepeatedForXYears}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="description"
              value={updatedCrop.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
          <Button variant="secondary" onClick={() => setEditMode(false)}>
            Cancel
          </Button>
        </Form>
      ) : (
        <>
          {crops ? (
            <div
            id="background"
            className="jumbotron textCenter"
            style={{ borderBottom: '1px darkgray dotted' }}
          >
            <div className="thumbnail">
              <p>
                <strong>{crops['cropName']}</strong>
              </p>
              <p>Pests: {crops['pests']}</p>
              <p>Diseases: {crops['diseases']}</p>
              <p>Soil type: {crops['soilType']}</p>
              <p>Climate: {crops['climate']}</p>
              <p>It should not be repeated for {crops['ItShouldNotBeRepeatedForXYears']} years</p>   

              {crops.imageUrl && (
            <img
              src={'data:image/jpeg;' + crops.imageUrl.substring(2, crops.imageUrl.length - 2)}
              alt={crops.cropName}
              style={{ width: 300, height: 400 }}
            />
          )}
              <h3>Descriere:</h3>
              <p>{crops['description']}</p>
            </div>
            <p>
              Data adaugarii:{' '}
              {new Date(crops['createdAt']).toLocaleString('en-US')}
            </p>
          </div>
        ) : (
          <h3>Item not found or deleted.</h3>
        )}
        {canEdit && (
          <>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
            <Button variant="primary" onClick={() => setEditMode(true)}>
              Edit
            </Button>
           
         {userData && userData.rol === "Fermier" && (
          <Button variant='succes' onClick={() => onSubmit( event , !selectarea)}>
            {selectarea ? 'Deselecteaza' : 'Selecteaza'}
          </Button>
        )}
   

    
      </>
    )}
  </>
)}
  </Container>
);
}

export default SinglePag;