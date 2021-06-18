import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import { Button, IconButton } from '@material-ui/core';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { Link, useHistory } from 'react-router-dom';
import { DivUserOptions } from './LoggedInUserIcon.styled';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../actions/userLoggedIn';
import { clearShoppingCart } from '../../actions/ShoppingCart';


export const LoggedInUserIcon = ({ firstname }) => {

    const dispatch = useDispatch();

    const history = useHistory()

    const handleSignOff = () => {
        let token = null;

        if (localStorage.getItem('user')) {
            token = JSON.parse(localStorage.getItem('user')).token
        }
        fetch('http://localhost:3001/auth/logout', {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        })
            .then(() => {
                localStorage.clear();
                dispatch(clearShoppingCart());
                dispatch(removeUser());
                history.push("/")
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
