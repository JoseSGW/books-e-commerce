import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import { Button, IconButton } from '@material-ui/core';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { Link } from 'react-router-dom';
import { DivUserOptions } from './LoggedInUserIcon.styled';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../actions/userLoggedIn';




export const LoggedInUserIcon = ({ firstname }) => {

    const dispatch = useDispatch();

    const handleSignOff = () => {
        fetch('http://localhost:3001/auth/logout', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        })
            .then(() => {
                localStorage.clear();
                dispatch(removeUser())
            })
            .catch(error => console.error('Error:', error))

    }

    return (
        <DivUserOptions>
            <Link to='/'>
                <PersonIcon />
                <span>{firstname}</span>
            </Link>
            <Button onClick={handleSignOff}>
                <MeetingRoomIcon />
                <span>Cerrar sesión</span>
            </Button>
        </DivUserOptions>
    )
}
