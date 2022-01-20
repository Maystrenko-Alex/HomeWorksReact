import React from 'react';
import { HashRouter } from 'react-router-dom';
import Header from './Header';
import {Routers} from './Routers';

function HW5() {
    return (
        <div>
           
            <HashRouter>

              <Header/>

              <Routers/>

            </HashRouter>
        </div>
    )
}

export default HW5
