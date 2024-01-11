import {styled, css} from 'styled-components'

interface InputFieldProps {
    label: string;
    name: string;
    type: string;
    value: string;
    placeholder: string;
    onChange: (e:React.ChangeEvent<HTMLInputElement>)=>void;

}

const StyledInputField = styled.div`
`

function InputField ({label, name,  type, value, placeholder, onChange}: InputFieldProps){
    return <div>
        <label htmlFor={name}>{label}</label>

        <input 
            name = {name}
            key = {name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            />
    </div>
}

export default InputField