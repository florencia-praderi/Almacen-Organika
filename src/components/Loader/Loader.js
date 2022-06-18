import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from "react"


const Loader = ()=>{
    const [load, setLoad] = useState (false)
    const changeLoad = ()=>{
        setLoad(!load)
    }
    return (
        <>
        <div> {!load ? <CircularProgress color="success"/>: <h1>Loading complete</h1>}</div>
        </>
    )
}

export default Loader