import { useState } from 'react';
import Alunos from './components/Alunos';
import UserProvider from './contexts/user';

export default function App() {
  return (
    <UserProvider>
        <div>
        <h1>ESCOLA</h1>
        <hr/>
        <Alunos/>
        </div>
    </UserProvider>
  );
}

