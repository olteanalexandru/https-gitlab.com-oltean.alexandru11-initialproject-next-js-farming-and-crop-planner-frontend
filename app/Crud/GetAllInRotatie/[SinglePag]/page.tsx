
"use client"
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Form, Container, Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { useGlobalContext } from '../../../Context/UserStore';
import { useGlobalContextCrop } from '../../../Context/culturaStore';

function SinglePag(): JSX.Element {
  const { data: userData } = useGlobalContext();

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
        titlu: crops.titlu,
        text: crops.text,
        descriere: crops.descriere,
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

  return (
    <Container>
      {editMode ? (
        <Form onSubmit={handleUpdate}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="titlu"
              value={updatedCrop.titlu}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Text</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="text"
              value={updatedCrop.text}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="descriere"
              value={updatedCrop.descriere}
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