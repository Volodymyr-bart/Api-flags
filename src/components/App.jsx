// import axios from 'axios';
// import { useEffect, useState } from 'react';
import { Details } from 'pages/Detail';
import { HomePage } from 'pages/HomePage';
import { NotFound } from 'pages/NotFound';
import { Route, Routes } from 'react-router-dom';

import { Header } from './Header/Header';
import { Main } from './Main/Main';

export const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
};
