import React, { useRef } from 'react'

const FocusInput = () => {
    const inputElement = useRef(null);

    const handleClickAndFocus = () => {
        inputElement.current.focus();
    }
  return (
    <div style={{marginLeft: "40px"}}>
        <input ref={inputElement} style={{padding: "10px"}} placeholder='Input field for useRef hook' type='text' />
        <h2>a. Focus on the input field when button clicked.</h2>
        <button onClick={handleClickAndFocus}>Click & Focus</button>
    </div>
  )
}

export default FocusInput