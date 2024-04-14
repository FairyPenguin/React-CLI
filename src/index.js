// server/index.js
import express from "express";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
// import Button from './Button.jsx';

// const reactHtml = ReactDOMServer.renderToString(<Button />);

// console.log(reactHtml);




const app = express();
const PORT = process.env.PORT || 8181;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});