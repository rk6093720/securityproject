import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from './redux/store';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <BrowserRouter>
          <Provider store={Store}>
            <App />
          </Provider>
        </BrowserRouter>
      </ChakraProvider>
    </ThemeProvider>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
