type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
    className?: string;
    isLoading?: boolean
}

export const Button = ({children, variant = 'primary', className, isLoading, disabled, ...rest} : ButtonProps) => {
    const getVariantStyle = ()=>{
    switch(variant){
        
        case 'secondary':
            return 'bg-white text-gray-700 border border-gray-700/50 hover:bg-gray-50'
        case 'danger':
            return 'bg-red-500 text-white border border-gray-700/50 hover:bg-red-600'
        case 'primary':
        default:
            return 'bg-blue-800 text-white hover:bg-blue-700 border border-gray700/50 shadow-sm';
    }
 };

 return(
    <button disabled={isLoading || disabled}
    className={`px-3 py-1 rounded-lg text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed
         ${getVariantStyle()} ${className || ''}`} {...rest} >{isLoading? 'Loading...' : children}</button>
 )
};