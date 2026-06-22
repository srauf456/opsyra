type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({className, ...rest}: InputProps){
    return(
    <input className={`border p-2 ${className || ''}`} {...rest}/>    
    )
}