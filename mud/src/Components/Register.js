import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import logo from '../Images/Torch2.gif'
import {Link} from 'react-router-dom';



const Former = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Wta =  styled.h1`
margin-top: 70px;
font-size: 48px;
color: maroon;
font-style: italic;
font-family: 'Metamorphous', cursive;`

const Torcher = styled.img`
transform rotate(20deg);
width: 150px;
height: 150px;`

const Welcome = styled.h1`
display: flex;
font-size: 48px;
color: maroon;
font-style: italic;
font-family: 'Metamorphous', cursive;`

const Signup = styled.div`

flex-wrap: wrap;
display:flex;
flex-direction: column;
align-items: center;
font-family: 'Metamorphous', cursive;`

const Inputer = styled.input`
width: 150px;
padding: 12px 20px;
margin: 8px 0;
border-radius: 5px;
font-family: 'Metamorphous', cursive;
color: black;
font-weight: bold;`

const Login = styled.button`
margin-top: 10px;
color:white;
width: 300px;
height: 50px;
background-color: maroon;
text-decoration: none;
border: none;
border-radius: 5px;
font-family: 'Metamorphous', cursive;
transition: 0.5s;
cursor: pointer;
:hover{
background-color: crimson;
}`

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

class Register extends React.Component{
    constructor(){
        super();
        this.state={ 
                username:"",
                password1: "",
                password2: "",
                                 };
                                }



handleSubmit = e => {
    console.log('submitted')
    e.preventDefault();
    
    const { username, password1, password2 } = this.state;
    const USER = { username, password1, password2 };
    axios
      .post('https://adv-project.herokuapp.com/api/registration', USER)
      .then(res => {
        
        const token = res.data.key;
        localStorage.setItem('jwt', token);
        this.setState({ username: '', password1: '', password2: '' });
        this.props.history.push('/play');
      })
      .catch(err => {
        
        
      });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

render() {
    return (
        <Signup>

        <Welcome>

        <Torcher src={logo} alt='torch'> 
        </Torcher>   
        <Wta> Sign Up </Wta>
        <Torcher src={logo} alt='torch'> 
        </Torcher>

        </Welcome>
        
        <Former
        onSubmit={this.handleSubmit}
        >
        
        
        <Inputer type="text" placeholder="Username" name="username"
        value={this.state.username} onChange={this.handleInput}/> 
        
        
        <Inputer type="password" placeholder="Password" name="password1"
        value={this.state.password1} onChange={this.handleInput}/> 
        
        <Inputer type="password" placeholder="Confirm Password" name="password2"
        value={this.state.password2} onChange={this.handleInput}/> 
        
       
        
        <Login onSubmit={this.handleSubmit}>
            Begin Adventuring
        </Login>
        </Former>
        
        <Link to="/">
            <Homer>
            Home
            </Homer>
        </Link>

        </Signup>


    )
}




}


export default Register;