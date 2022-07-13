import React from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
    return (
        <div>
            <input placeholder='할일을 입력'/>
            <button type='submit'>
        <MdAdd/>
            </button>
        </div>
    )
}

export default TodoInsert;