import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';
import 'semantic-ui-css/semantic.min.css';
import 'normalize.css/normalize.css';
import 'ress/ress.css';
import './styles/styles.scss'

render(<Router />, document.getElementById('app'));

