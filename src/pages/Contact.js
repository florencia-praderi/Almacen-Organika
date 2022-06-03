const Contact = ()=>{
    return (
        <> 
        <h2 className="title">CONTACTO</h2>     
        <div className="contact_container">
            <div>    
                <h3>Sucursales</h3>
            </div> 
                <ul>
                <li>Ejido 1515 esquina Acevedo Diaz. - Tel.: 2900 20 47</li>
                <li>Sarandí 222 esquina Treinta y Tres. - Tel.: 2915 44 55</li>
                <li>18 de Julio 888 esq. Convención. - Tel.: 2903 15 10</li>
                <li>Punta Carretas Shopping, nivel 1. - Tel.: 2712 88 40</li>
                <li>Unicenter Shopping, nivel 3, local 6 - Tel.: 2606 03 80</li>
                </ul>
            </div>
        <div>
        <form className="contact_form">
            <label> Nombre: <input type="text" name="name" /> </label><br></br>
            <label> Mail: <input type="email" name="email" /> </label><br></br>
            <label> Mensaje: <input type="text" name="message" /> </label><br></br>
            <label><input type="submit" value="Enviar" /></label>
        </form>
        </div>
        </>
    )
}
export default Contact