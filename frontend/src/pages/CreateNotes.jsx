import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateNotes = () => {
  const [title, setTitle] = useState('');
  const [concerned_person, setConcerned_Person] = useState('');
  const [concernedDate, setconcernedDate] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveNote = () => {
    const data = {
      title,
      concerned_person,
      concernedDate,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/notes', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Note Created successfully', { variant: 'success' });
        // navigate('/');
        redirect('/')
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Note</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Concerned_Person</label>
          <input
            type='text'
            value={concerned_person}
            onChange={(e) => setConcerned_Person(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input
            type='date'
            value={concernedDate}
            onChange={(e) => setconcernedDate(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveNote}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateNotes