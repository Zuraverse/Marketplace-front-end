import {Input as InputBox } from 'antd';

const Input = ({Prefix, onChange, name, placeholder, type='text'})=>{
    return(
        <InputBox type={type} placeholder={placeholder}  onChange={onChange} name={name} prefix={<Prefix />} />
    )
}

export default Input;