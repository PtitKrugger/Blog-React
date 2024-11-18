import { useId } from "react"

export default function Input({label, type, ...props}) {
    const id = useId();
    const InputComponent = type === 'textarea' ? 'textarea' : 'input'
    return (
        <>
            {label && <label htmlFor={id}>{label}</label>} 
            <InputComponent id={id} {...props} />
        </>
    )
}