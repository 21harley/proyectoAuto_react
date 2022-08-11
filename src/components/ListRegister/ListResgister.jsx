const ListUser = ({users}) =>{
    console.log(users);
    return(
        <>
        <h3 className="title">User Registrados</h3>
        <div className="grid-users">
            {users.map((obj)=>
             <>
             <figure className="user-card">
               <img className="img-users" key={obj[0]} alt="tan" src={obj[1].foto} />
               <figcaption>{obj[1].nombre}</figcaption>
             </figure>
               
             </>
            )}
        </div>
        </>

    )
}

export default ListUser