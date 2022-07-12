import React from 'react';
import { createRoot } from 'react-dom/client';
import QuoteBody from './components/QuoteBody';

// CSS
import './styles/style.css';

const root = document.getElementById('root');
createRoot(root).render(<QuoteBody />);