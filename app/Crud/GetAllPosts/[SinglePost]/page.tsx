"use client"
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Button, Form } from 'react-bootstrap';
import { useGlobalContextPost } from '../../../Context/postStore';
import { useGlobalContext } from '../../../Context/UserStore';

export default function SinglePost() {
    const _id = useSearchParams().get("post") as string

  const {
    data,
    loading,
    error,
    getPost,
    deletePost,
    updatePost,
  } = useGlobalContextPost();

  const { data: user } = useGlobalContext();
  const token = user.token;
  const isAdmin = user.rol === 'Administrator';

  const [editMode, setEditMode] = useState(false);
  const [updatedPost, setUpdatedPost] = useState({
    title: '',
    brief: '',
    description: '',
  });

  useEffect(() => {
    getPost(_id);
  }, [_id]);

  useEffect(() => {
    if (data) {
      setUpdatedPost({
        title: data.title,
        brief: data.brief,
        description: data.description,
      });
    }
  }, [data]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  console.log(data, 'data');

  if (!data) {
    return <h1>Nothing to show</h1>;
  }

  const handleDelete = async () => {
    await deletePost(data._id, token);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updatePost(data._id, updatedPost, token);
    setEditMode(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPost({ ...updatedPost, [name]: value });
  };

  return (
    <Container>
      {editMode ? (
        <Form onSubmit={handleUpdate}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={updatedPost.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Brief</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="brief"
              value={updatedPost.brief}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="description"
              value={updatedPost.description}
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
          <h1>{data.title}</h1>
          <p>{data.brief}</p>
          <p>{data.description}</p>
          {isAdmin && (
            <>
              <Button variant="danger" onClick={handleDelete}>
                Delete Post
              </Button>
              <Button variant="primary" onClick={() => setEditMode(true)}>
                Edit Post
              </Button>
            </>
          )}
        </>
      )}
    </Container>
  );
}


