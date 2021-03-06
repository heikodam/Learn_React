import React, { Component } from 'react';
import Aux from '../Auxiliary';
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component{

    state = {
        showSideDrawer: false
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render () {
        return (
        <Aux>
            <Toolbar show={this.sideDrawerToggleHandler}/>
            <SideDrawer closed={this.sideDrawerToggleHandler} open={this.state.showSideDrawer} />
            <main className={classes.Content}>
                {this.props.children}
            </main>
    </Aux>
        );
    }
}

export default Layout;