import React from 'react';
import { Route } from 'react-router-dom';
import Aux from '../../hoc/Aux';
import Menu from '../Menu/Menu';
import Wallets from '../Menu/Items/Wallets';
import Transactions from '../Menu/Items/Transactions';

const routes = (props) => { 
    return (
        <Aux>
            <Route path={`/(wallets|transactions|)`} component={Menu}/>
            <Route path="/wallets" component={Wallets}/>
            <Route path="/transactions" component={Transactions}/>
        </Aux>
    );
}

export default routes;