import React from 'react'
import styled from 'styled-components'


function InputComponent({ label, placeholder, type }) {

    return (
        <div className='flex flex-col w-1/4'>
            <Label>{label}</Label>
            <Input placeholder={placeholder} type={type}></Input>
        </div>
    )
}

export default InputComponent


const Label = styled.label`
    font-size: 12px;
    padding-left: 5px;
`
const Input = styled.input`
    border: 1px solid #CCCCCC;
    border-radius: 5px;
    width: 100%;
    padding: 2px;
    padding-left: 5px;
`