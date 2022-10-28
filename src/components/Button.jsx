

export function Button({content="click", color="red", accion}){
    return(
        <>
            <button className="card" style={{background:color}} onClick={accion}>{content}</button>
        </>
    )
}