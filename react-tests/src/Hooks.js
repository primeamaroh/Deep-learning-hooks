import { ActionTypes } from '@mui/base';
import React, { useEffect, useReducer, useState } from 'react';


function Hook(){

    const reducer = (state, action)=> {
        switch(action.type){
            case "yellowBox" :
                return {yellowMargin: state.yellowMargin[0].margin === "100px", blueMargin: "-100px", redMargin: "0px", yellowMargin: !state.yellowMargin[0].visible}
            case "redBox" :
                return {yellowMargin: "0px", blueMargin: "-100px", redMargin: "0px", showBox: !state.showBox}
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, {
        yellowMargin: [
            {
                margin: "0px",
                visible: true
            }
        ], 
        blueMargin:[
            {
                margin: "0px",
                visible: true
            }
        ], 
        redMargin:[
            {
                margin: "0px",
                visible: true
            }
        ]
    })
   
    
    
    return (
        
        <div style={{margin: "0px 500px"}}>
            {state.yellowMargin[0].visible && <div style={
                {
                    backgroundColor: 'yellow',
                    height: '100px', 
                    width: '150px',
                    marginTop: state.yellowMargin}
                }></div>
                }
            <button onClick={()=>{
                dispatch({type: 'yellowBox'})
            }}>Send</button>


             <div style={
                {backgroundColor: 'blue',
                 height: '100px', 
                 width: '150px'}
                }></div>
                
            <button>send</button>
            <div  style={{backgroundColor: 'red', height: '100px', width: '150px'}}></div>
            <button>send</button>

        </div>
    )
}

export default Hook;