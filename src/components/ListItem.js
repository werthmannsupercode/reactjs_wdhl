const ListItem = (props) => {

    return (
        <li style={{ color: props.status ? "green" : "red" }} onClick={() => props.changeStatus(props.id)} >{props.text}</li>
    );
}

export default ListItem;