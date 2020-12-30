import React from 'react'
import {List,ListItem, ListItemText} from '@material-ui/core'
import './Todo.css';

function Todo(props) {
    return (
        <List className="Todo">
            <ListItem>
                <ListItemText primary={props.text} secondary="Dummy deadline"/>   
            </ListItem>
        </List>
    )
}
export default Todo;
// boiler plate shoertcut is rfce
