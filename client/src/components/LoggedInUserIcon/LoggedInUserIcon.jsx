import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { Link } from 'react-router-dom';
import { DivUserOptions } from './LoggedInUserIcon.styled';


export const LoggedInUserIcon = ({ firstname }) => {
    console.log(firstname)
    return (
        <DivUserOptions>
            <Link to='/'>
                <PersonIcon />
                <span>{firstname}</span>
            </Link>
            <Link to='/'>
                <MeetingRoomIcon />
                <span>Cerrar sesión</span>
            </Link>
        </DivUserOptions>
    )
}
