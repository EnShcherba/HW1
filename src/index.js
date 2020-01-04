import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { FacebookButton } from './conponents/facebookButton';
import { TwitterButton } from './conponents/twitterButton';
import { IconBar } from './icon-bar';

ReactDOM.render(
    <div>
        <FacebookButton />
        <TwitterButton />
        <IconBar orientation='vertical' />
    </div>,

    document.getElementById('root')
);
serviceWorker.unregister();
