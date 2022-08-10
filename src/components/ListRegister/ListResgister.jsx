const ListUser = ({users}) =>{
    return(
        <div>
            {users.map((obj)=><img key={obj[0]} alt="tan" src={obj[1].foto} />)}
        </div>
    )
}

export default ListUser