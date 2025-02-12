// Importing React library
import React from 'react';

// Importing ReactDOM for rendering the application
import ReactDOM from 'react-dom/client';

// Importing BrowserRouter for routing
import { BrowserRouter as Router } from 'react-router-dom';

// Importing ThemeProvider for theme context management
import ThemeProvider from './utils/ThemeContext';

// Importing the main App component
import App from './App';

// Creating the root element and rendering the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrapping the application with Router for routing capabilities */}
    <Router>
      {/* Wrapping the application with ThemeProvider for theme management */}
      <ThemeProvider>
        {/* Rendering the main App component */}
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
