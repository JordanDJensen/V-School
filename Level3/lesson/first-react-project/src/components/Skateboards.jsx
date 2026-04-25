export default function Skateboard({name, size, style, design, price}){

    const sizeElements = size.map((num, index) =>{
        return(
            <p key={index}>{num}</p>
        )
    })
    return(
        <div className="skateboard">
        <h1>{name}</h1>
        <p>Size:</p>
        {sizeElements}
        <p>{style}</p>
        <p>{design}</p>
        <p>{price}</p>
      </div>
    )
}