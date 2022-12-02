import React, { useRef } from 'react';

function UseRef() {
  const nameRef = useRef();
  const onChange = () => {};
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    nameRef.current.value = '';
  };
  return (
    <>
      <div>UseRef Test Case</div>
      <form action='' onSubmit={onSubmit} className='space-y-4'>
        <label htmlFor='test'>Name</label>
        <br />
        <input
          type='text'
          ref={nameRef}
          onChange={onChange}
          className=' py-2 px-3 outline-none rounded-lg border-[1px] border-slate-200'
        />
        <br />
        <button type='submit' className='py-2 px-3 bg-blue-400'>
          Submit
        </button>
      </form>
    </>
  );
}

export default UseRef;
