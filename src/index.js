/* This is the starting point of our App. 
This is the point from which all the other components get interconnected related to the app */

import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './js/app';

render(<App/>, document.getElementById('app'))