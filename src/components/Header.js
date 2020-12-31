import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Apps, ArrowDropDown, Notifications } from '@material-ui/icons';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="images/Logo.png" alt="" />
            </div>
            <div className="header_middle">
                <SearchIcon />
                <input type="text" placeholder="Search mail" />
                <ArrowDropDown className="header_inputCaret" />
            </div>
            <div className="header_right">
                <IconButton>
                    <Apps />
                </IconButton>
                <IconButton>
                    <Notifications />
                </IconButton>
                <IconButton>
                    <Avatar />
                </IconButton>
            </div>

        </div>
    )
}

export default Header
