type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({className, ...rest}: InputProps){
    return(
    <input className={`border border-gray-200 rounded w-full text-sm text-gray-900 bg-white transition focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 p-2 ${className || ''}`} {...rest}/>    
    )
}