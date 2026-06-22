type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
    className?: string;
}

export const Button = ({children, variant = 'primary', className, ...rest} : ButtonProps) => {
    const getVariantStyle = ()=>{
    switch(variant){
        
        case 'secondary':
            return 'bg-gray-300 text-black';
        case 'danger':
            return 'bg-red-500 text-white';
        case 'primary':
        default:
            return 'bg-gray-800 text-white';
    }
 };

 return(
    <button className={`px-3 py-1 rounded ${getVariantStyle()} ${className || ''}`} {...rest} >{children}</button>
 )
};