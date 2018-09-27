import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import logo from '../Images/Torch2.gif'
import {Link} from 'react-router-dom';
import Pusher from 'pusher-js';

const Playbox = styled.div`
border: 7px solid #411e12;
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: flex-end;
margin-top: 25px;
justify-content: flex-end;
width: 500px;
height: 500px;
background-color: black;`

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

const Pad = styled.div`
height: 150px;
width: 150px;
background-color: none;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 0px;
margin-bottom: 30px;
margin-right: 5px
`

const North = styled.button`
color: white;
font-size: 18px;
font-family: 'Metamorphous', cursive;

cursor: pointer;
border-radius: 3px;
text-decoration: none;
border: none;
height: 50px;
width: 50px;
background-color: maroon;
transition: .7s;
:hover{
    background-color: crimson;
}
`
const West = styled.button`
color: white;
font-size: 18px;
font-family: 'Metamorphous', cursive;
margin-right: 100px;
cursor: pointer;
border-radius: 3px;
text-decoration: none;
border: none;
height: 50px;
width: 50px;
background-color: maroon;
transition: .7s;
:hover{
    background-color: crimson;
}
`
const South = styled.button`
color: white;
font-size: 18px;
font-family: 'Metamorphous', cursive;
margin-bottom: 50px;
cursor: pointer;
border-radius: 3px;
text-decoration: none;
border: none;
height: 50px;
width: 50px;
background-color: maroon;
transition: .7s;
:hover{
    background-color: crimson;
}
`
const East = styled.button`
position: relative;
color: white;
font-size: 18px;
font-family: 'Metamorphous', cursive;
margin-left: 100px;
margin-top:-150px;
cursor: pointer;
border-radius: 3px;
text-decoration: none;
border: none;
height: 50px;
width: 50px;
background-color: maroon;
transition: .7s;
:hover{
    background-color: crimson;
}
`
const Torcher1 = styled.img`

padding-left: 690px;
position: absolute;

width: 150px;
height: 150px;
`

const Torcher2 = styled.img`

padding-right: 700px;

position: absolute;

width: 150px;
height: 150px;`

const Roomy = styled.div`
margin-right: 47px;
width: 400px;
height 250px;
background-color: lightgray;
border-radius: 10px;
border: 6px solid grey;
`
const Myroom = styled.h1`
font-size: 24px;
color: maroon;
font-style: italic;
font-family: 'Metamorphous', cursive;

`

class Play extends React.Component{
    state={
        command: '',
        player: '',
        currentRoom: '',
        roomDescription:'',
        otherPlayers: ''

    }

    componentDidMount() {
        const token = localStorage.getItem('jwt');

        axios.defaults.headers.common['Authorization'] = `Token ${token}`;
    
        axios
          .get('https://adv-project.herokuapp.com/api/adv/init')
          .then(res => {
            this.setState({ player: res.data.name, currentRoom: res.data.title, roomDescription: res.data.description, otherPlayers: res.data.players })
            if (this.state.otherPlayers === '') {
                this.setState({otherPlayers: 'No one else is around'}) 
            }
            else {
                
                let players = ''
                this.state.otherPlayers.forEach(p => {
                    players = `${players} -${p}`
                })
                this.setState({otherPlayers: players})
            }
          })
          .catch(err => {
            console.log('error: ', err.message)
          }) 
    }

    buttonHandlerN = e => {
        console.log('N')
        this.setState({command: "n"})
        this.move('n')
        
        
    }
    buttonHandlerW = e => {
        this.setState({command: "w"})
        this.move('w')
        
    }
    buttonHandlerS = e => {
        this.setState({command: "s"})
        this.move('s')
        
    }
    buttonHandlerE = e => {
        this.setState({command: "e"})
        this.move('e')
        
    }

   
  
    move = (direction) => {
        const token = localStorage.getItem('jwt');

        axios.defaults.headers.common['Authorization'] = `Token ${token}`;
        console.log('ran')
        axios
            .post('https://adv-project.herokuapp.com/api/adv/move/', {"direction": direction})
            .then(res => {
                
                this.setState({currentRoom: res.data.title, roomDescription: res.data.description, otherPlayers: res.data.players})
                let players = ''
                this.state.otherPlayers.forEach(p => {
                   players = `${players} -${p}`
                })
            })
            .catch(err => {
                console.log('error: ', err.message)
            })    
    }

  


    render() {
        return (
            <Signup>
                <Torcher1 src={logo} alt='torch'>
        </Torcher1>   

        <Torcher2 src={logo} alt='torch'>
        </Torcher2>

            <Playbox>
                <Roomy>
                    <Myroom>You enter the {this.state.currentRoom} </Myroom>
                    <p> {this.state.roomDescription}</p>
                    <p>Other Players: {this.state.otherPlayers}</p>
                </Roomy>
                <Pad>
                <North onClick={() => {this.buttonHandlerN();}} >N</North>

                <West onClick={() => {this.buttonHandlerW(); }}>W</West>
                <South onClick={() => {this.buttonHandlerS(); }}>S</South>
                <East onClick={() => {this.buttonHandlerE(); }}>E</East>
                </Pad>
                
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