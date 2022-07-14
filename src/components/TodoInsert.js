import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState('');
  const onChange = useCallback(e=>{
    setValue(e.target.value);
  },[]);

  const onSubmit = useCallback(e=>{
    e.preventDefault();
    onInsert(value);
    setValue('');
  })
  return (
    <div >
      <form className="TodoInsert" onSubmit={onSubmit}>
      <input placeholder="할일을 입력"  onChange={onChange} value={value}/>
      <button type="submit">
        <MdAdd />
      </button>
      </form>
    </div>
  );
};

export default TodoInsert;
