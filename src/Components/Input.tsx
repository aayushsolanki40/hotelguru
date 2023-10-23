import React from 'react'
import '../styles/Components/input.scss';

interface IInputProps {
    type : 'text' | 'email' | 'password'
    onClick: any,
    value: string,
    title: string,
    placeholder: string,
    name: string
}

export default function Input(props: IInputProps) {
  return (
    <div className='custom-input'>
        <span className='input-title'>{props.title}</span>
        <div className="input-box">
            <input type={props.type}name={props.name} id="email" placeholder={props.placeholder} />
        </div>
    </div>
  )
}
