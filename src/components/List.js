import { useEffect, useState } from 'react';
import ListItem from './ListItem';

const List = () => {

    const [todos, setTodos] = useState([])
    const [countFalse, setCountFalse] = useState(0)

    const addItem = () => {
        const textvalue = document.querySelector('input').value;
        console.log(textvalue);
        setTodos([...todos, { text: textvalue, status: false }]);
        console.log(todos)
    }

    console.log(todos)

    const changeStatus = (id) => {
        setTodos(
            todos.map((todo, i) => {
                if (i === id) {
                    return { ...todo, status: !todo.status }
                }

                else {
                    return todo
                }
            })
        )
    }

    useEffect(() => {
        setCountFalse((elt) => {
            const alleFalschen = todos.filter(({ status }) => status === false)
            console.log(alleFalschen.length)
            elt = alleFalschen.length

            return elt
        })
    }, [todos])

    return (
        <div className="App">
            <p>{countFalse}</p>
            <input type="text" />
            <button onClick={addItem}>+</button>
            <ul>
                {todos.map((todo, i) => {
                    return (
                        <ListItem

                            key={i}
                            id={i}
                            text={todo.text}
                            status={todo.status}
                            changeStatus={changeStatus}

                        />)
                })}
            </ul>
        </div>
    );

}

export default List;