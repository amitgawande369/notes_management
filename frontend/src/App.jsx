import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DeleteNote from './pages/DeleteNote'
import EditNote from './pages/EditNote'
import ShowNote from './pages/ShowNote'
import Home from './pages/Home'
import CreateNotes from './pages/CreateNotes'
import { SnackbarProvider } from 'notistack'


const App = () => {
  return (
    <SnackbarProvider>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/notes/create' element={<CreateNotes />} />
      <Route path='/notes/details/:id' element={<ShowNote />} />
      <Route path='/notes/edit/:id' element={<EditNote />} />
      <Route path='/notes/delete/:id' element={<DeleteNote />} />
    </Routes>
    </SnackbarProvider>
  )
}

export default App