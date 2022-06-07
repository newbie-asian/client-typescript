import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import UpdateTodo from './UpdateTodo';
import { useNavigate, useParams } from 'react-router-dom';

const UseUpdateTodo: FC = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [user, setUser] = useState({});
  const [todo, setTodo] = useState({});

  const fetchUser = async () => {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    const userId = JSON.parse(localStorage.getItem('userId'));

    const response = await axios.get(`http://localhost:2014/users/${userId}`, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });

    const { user } = response.data;
    user ? setUser(user) : setUser(null);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
  };

  useEffect(() => {
    user?.todos?.map((todo) => todo.id === params.id && setTodo(todo));
  }, [user, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (todo)
      user.todos.forEach((item, index) => {
        if (item.id === params.id) {
          user.todos[index] = todo;

          setUser((prevState) => ({ ...prevState }));
        }
      });

    try {
      await axios.put('http://localhost:2014/users', user);
      navigate('/todos');
    } catch (err) {
      console.log(err);
    }

    setTodo({ todo: '', description: '' });
  };

  return <UpdateTodo handleSubmit={handleSubmit} handleChange={handleChange} todo={todo} />;
};

export default UseUpdateTodo;
