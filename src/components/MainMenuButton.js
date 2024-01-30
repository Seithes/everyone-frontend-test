import '../App.css';
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MainMenu from './MainMenu';

class MainMenuButton extends Component {
    constructor(props) {
        super(props)
        this.state = {showMenu: false};

        this.ToggleMenu = this.ToggleMenu.bind(this);
        this.OnSearchClick = this.OnSearchClick.bind(this);
    }

    OnSearchClick() {
        console.log("Search!");
    }

    ToggleMenu() {
        this.setState(prevState => ({
          showMenu: !prevState.showMenu
        }));
    }

    render() {
        if (this.state.showMenu) {
            return (
                <MainMenu
                    onMenuClose={this.ToggleMenu}
                    onSearchClick={this.OnSearchClick}
                />
            );
        } else {
            return (
                <button className='header-menu' onClick={this.ToggleMenu}>
                    Menu <FontAwesomeIcon icon="fa-solid fa-bars" size="lg"/>
                </button>
            );
        }
    }
}

export default MainMenuButton