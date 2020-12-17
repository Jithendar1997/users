import { TextField } from '@material-ui/core'
import React, { useState } from 'react'

export default function Volleyballregistration(props) {
      

    const [data,setdata]=useState({
        player1:'',
        player2:'',
        player3:'',
        player4:'',
        player5:'',
        player6:'',
        player7:'',
        player8:''
    })

    return (
        <>
            <h1 style={{textAlign:'center'}}>VolleyBall Registration Page</h1>
        <div style={{marginLeft:'2cm'}}>
        <form>
    <TextField label='player1' value={data.player1} onChange={e=>{setdata(e.target.value)}} /><br></br>
    <TextField label='player1' value={data.player2} onChange={e=>{setdata(e.target.value)}} /><br></br>
    <TextField label='player1' value={data.player3} onChange={e=>{setdata(e.target.value)}} /><br></br>
    <TextField label='player1' value={data.player4} onChange={e=>{setdata(e.target.value)}} /><br></br>
    <TextField label='player1' value={data.player5} onChange={e=>{setdata(e.target.value)}} /><br></br>
    <TextField label='player1' value={data.player6} onChange={e=>{setdata(e.target.value)}} /><br></br>
    <TextField label='player1' value={data.player7} onChange={e=>{setdata(e.target.value)}} /><br></br>
    <TextField label='player1' value={data.player8} onChange={e=>{setdata(e.target.value)}} /><br></br>
        </form>
        </div>
        </>
    )
}
