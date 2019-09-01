import { hot } from 'react-hot-loader/root';
import * as React from 'react';
//import { RouteComponentProps } from 'react-router';


import Counter from './Counter';
import { Layout } from './Layout';
import Burger from './Burger';

const Application = () => (
	<Burger/>
);

export default hot(Application);
