import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import logo from '../Images/Torch2.gif'
import {Link} from 'react-router-dom';

const Playbox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 25px;

width: 500px;
height: 500px;
background-color: gray`

const Signup = styled.div`
display:flex;
flex-direction: column;
align-items: center;
font-family: 'Metamorphous', cursive;`

const Homer = styled.button`
margin-top: 20px;
color:Black;
width: 150px;
height: 50px;
background-color: #4caf50;
text-decoration: none;
border: none;
border-radius: 5px;
font-family: 'Metamorphous', cursive;
transition: 0.5s;
cursor: pointer;
:hover{
background-color: #6ad334;
`


class Play extends Component{
    state={

    }
    render() {
        return (
            <Signup>
            <Playbox>

            </Playbox>

            <Link to="/">
                <Homer>
                Home
                </Homer>
            </Link>
            </Signup>

        )
    }
}

export default Play;