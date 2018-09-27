import React, {Component} from 'react';

import styled from 'styled-components';
import keyframes from 'styled-components';
import logo from '../Images/Torch2.gif'
import {Link} from 'react-router-dom';

const Input = styled.input`
width: 150px;
padding: 12px 20px;
margin: 8px 0;
border-radius: 5px;
font-family: 'Metamorphous', cursive;`

const Signup = styled.div`
display:flex;
flex-direction: column;
align-items: center;
font-family: 'Metamorphous', cursive;`

const Welcome = styled.h1`
display: flex;
font-size: 48px;
color: maroon;
font-style: italic;
font-family: 'Metamorphous', cursive;`

const Login = styled.button`
color:white;
width: 300px;
height: 50px;
background-color: #795548;
text-decoration: none;
border: none;
border-radius: 5px;
font-family: 'Metamorphous', cursive;
transition: 0.5s;
cursor: pointer;
:hover{
background-color: #944f36;
}`

const Getstarted = styled.button`
color: white;
width: 300px;
height: 50px;
background-color: #30538e;
text-decoration: none;
border: none;
border-radius: 5px;
font-family: 'Metamorphous', cursive;
margin-bottom:10px;
transition: 0.5s;
cursor: pointer;
:hover{
    background-color:  #376fcd
}`

const Wta =  styled.h1`
margin-top: 70px;
font-size: 48px;
color: maroon;
font-style: italic;
font-family: 'Metamorphous', cursive;
`
const Torcher = styled.img`

width: 150px;
height: 150px;
transform rotate(20deg);

`





class Home extends Component {
  
    render(){
        return (
            <Signup>
                <Welcome>
               
                <Torcher src={logo} alt='torch'>
                </Torcher>   <Wta> Welcome to Adventure! </Wta>        
               
                <Torcher src={logo}  alt='torch'>
                </Torcher>

                </Welcome>
                

           
            <Link to='/register'>
            <Getstarted>
                Register
            </Getstarted>
            </Link>

            <Link to='/login'>
             <Login>
                Login
                </Login>
                </Link>

            </Signup>
           

        )
    }
}


export default Home;