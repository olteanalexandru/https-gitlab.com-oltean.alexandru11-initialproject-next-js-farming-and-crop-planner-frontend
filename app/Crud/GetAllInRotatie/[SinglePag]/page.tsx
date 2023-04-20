"use client"
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======
import { useEffect, useState } from 'react';
>>>>>>> c7e98a45e20e56d686e7a047d511b9ffbc0495f0
import { useSearchParams } from 'next/navigation';
import { Form, Container, Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { useGlobalContext } from '../../../Context/UserStore';
import { useGlobalContextCrop } from '../../../Context/culturaStore';

function SinglePag(): JSX.Element {
  const { data: userData } = useGlobalContext();
<<<<<<< HEAD
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
=======

  if (!userData) {
    return <h1>Accesul interzis</h1>;
  }

  const navigate = useRouter();
  const _id = useSearchParams().get('crop') as string;

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

  const token = userData.token;
  const LocaluserId = userData._id;

  const [editMode, setEditMode] = useState(false);
  const [updatedCrop, setUpdatedCrop] = useState({
    titlu: '',
    text: '',
    descriere: '',
>>>>>>> c7e98a45e20e56d686e7a047d511b9ffbc0495f0
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
<<<<<<< HEAD
        cropName: crops.cropName,
        ItShouldNotBeRepeatedForXYears: crops.ItShouldNotBeRepeatedForXYears,
        description: crops.description,
=======
        titlu: crops.titlu,
        text: crops.text,
        descriere: crops.descriere,
>>>>>>> c7e98a45e20e56d686e7a047d511b9ffbc0495f0
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
<<<<<<< HEAD

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
=======
>>>>>>> c7e98a45e20e56d686e7a047d511b9ffbc0495f0

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateCrop(_id, updatedCrop, token);
    setEditMode(false);
  };

<<<<<<< HEAD

const onSubmit = async (e: React.FormEvent<HTMLFormElement>, newSelectArea: boolean) => {
  e.preventDefault();
  if (userData && userData.rol === "Fermier") {
    await selectare(_id, newSelectArea, LocaluserId, token);
    setSelectarea(newSelectArea);
  }
}
=======
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCrop({ ...updatedCrop, [name]: value });
  };

  const canEdit = userData.rol === 'Administrator' || userData._id === crops.user;
>>>>>>> c7e98a45e20e56d686e7a047d511b9ffbc0495f0

  return (
    <Container>
      {editMode ? (
        <Form onSubmit={handleUpdate}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
<<<<<<< HEAD
              name="cropName"
              value={updatedCrop.cropName}
=======
              name="titlu"
              value={updatedCrop.titlu}
>>>>>>> c7e98a45e20e56d686e7a047d511b9ffbc0495f0
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
<<<<<<< HEAD
            <Form.Label>Nu se va repeta pentru x ani:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="ItShouldNotBeRepeatedForXYears"
              value={updatedCrop.ItShouldNotBeRepeatedForXYears}
=======
            <Form.Label>Text</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="text"
              value={updatedCrop.text}
>>>>>>> c7e98a45e20e56d686e7a047d511b9ffbc0495f0
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
<<<<<<< HEAD
              name="description"
              value={updatedCrop.description}
=======
              name="descriere"
              value={updatedCrop.descriere}
>>>>>>> c7e98a45e20e56d686e7a047d511b9ffbc0495f0
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
<<<<<<< HEAD
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
=======
              id="background"
              className="jumbotron textCenter"
              style={{ borderBottom: '1px darkgray dotted' }}
            >
              <div className="thumbnail">
                <p>
                  <strong>{crops['titlu']}</strong>
                </p>
                <h3>Pe scurt:</h3>
                <p>{crops['text']}</p>
                <h3>Pe Lung:</h3>
                <p>{crops['descriere']}</p>
                {crops['selectare'] && crops['selectareBy'] == LocaluserId ? (
                  <>
                    <h3>Selectat</h3>
                    <p> {crops['selectare']} </p>
                  </>
                ) : (
                  <p>ne selectat</p>
                )}
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
            </>
          )}
        </>
      )}
    </Container>
    );
    }
    
    export default SinglePag;
>>>>>>> c7e98a45e20e56d686e7a047d511b9ffbc0495f0
