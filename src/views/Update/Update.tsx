import React, { FC, useEffect, useState } from 'react';
import UseUpdateTodo from '@components/Todos/Update/UseUpdateTodo';
import { useNavigate } from 'react-router-dom';
import Header from '@components/layouts/Header/Header';
import axios from 'axios';

const Update: FC = () => {
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('accessToken'));

    !token && navigate('/');
  }, []);

  const fetchUser = async () => {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    const userId = JSON.parse(localStorage.getItem('userId'));

    try {
      const response = await axios.get(`http://localhost:2014/users/${userId}`, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });

      const { user } = response.data;
      user ? setUser(user) : setUser(null);
    } catch (error) {}
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Header user={user} />
      <section className="w-full sm:w-[40rem] mx-auto">
        <UseUpdateTodo user={user} setUser={setUser} />
      </section>
    </>
  );
};

export default Update;
