import * as React from 'react';
import { render } from 'react-dom';

import { App } from "./components/App";
import {Provider} from 'react-redux';

const root = document.getElementById("root");
root ? render(<App />, root) : false;
