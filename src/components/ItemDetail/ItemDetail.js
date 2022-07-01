import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({data}) => {
    
    return (
        <>
        <div className='item-detail'>
        <div>
            <img src={`../images/${data.image}`}/>
        </div>
        <h2>{data.title}</h2>
        <span>$ {data.price}</span>      
        <p> {data.description}</p>  
        <p> {data.cantidad} </p>    
        
        <div className='count-item'>
            <ItemCount data={data}/>
        </div> 
        </div>  
        </>
    )
}

export default ItemDetail