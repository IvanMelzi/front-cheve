import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import './SideBar.css'

//Icons Imports
import { Home as HomeIcon } from '@material-ui/icons'

/**
 * Side Bar with router links.
 *
 */
const SideBar: FC<any> = () => {
    return (
        <div className="main-side">
            <span><NavLink to="/home" exact>Inicio</NavLink></span>
            <span className="icon">
                <NavLink to="/home" exact>
                    <HomeIcon />
                </NavLink>
            </span>
        </div>
    );
}

export default SideBar
