function UsersItem(props){
    return(
        <li>
            <div>
                <h2>{props.name}</h2>
                <p>{props.age}</p>
                <p>{props.gen}</p>
            </div>

        </li>
    );
}
export default UsersItem;