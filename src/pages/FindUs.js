import * as React from 'react';
import TextField from '@mui/material/TextField';

const FindUs = ()=>{
    return (
        <> 
        <h2 className="title">Nuestras sucursales</h2>     
        <div className="contact_container">
                <ul>
                <li>Ejido 1515 esquina Acevedo Diaz. - Tel.: 2900 20 47</li>
                <li>Sarandí 222 esquina Treinta y Tres. - Tel.: 2915 44 55</li>
                <li>18 de Julio 888 esq. Convención. - Tel.: 2903 15 10</li>
                <li>Punta Carretas Shopping, nivel 1. - Tel.: 2712 88 40</li>
                <li>Unicenter Shopping, nivel 3, local 6 - Tel.: 2606 03 80</li>
                </ul>
            </div>
        <div className='suscribe_container'>
            <h2>¡Suscríbete a nuestra newsletter y déjate inspirar!</h2>
            <h4>Ofertas exclusivas y noticias especiadas</h4>
            <form className='contact_form'>
            <TextField id="filled-basic" name="name" value='' label="Nombre y apellido: " variant="filled"/>
            <TextField id="outlined-basic" name="email" value='' label="Mail: " variant="outlined"/>
            <input type="submit" value="Suscríbete al boletín" />
            </form>
        </div>
        </>
    )
}
export default FindUs