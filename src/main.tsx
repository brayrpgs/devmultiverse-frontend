import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { HomePage } from './pages/HomePage.tsx'
import "./styles/global/global.css";
import { ErrorPage } from './pages/ErrorPage.tsx';
import { Test } from './pages/Test.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<ErrorPage />} />
        <Route path="/signin" element={<ErrorPage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/*" element={<ErrorPage />} /> 
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
