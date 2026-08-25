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
            return 'bg-gray-300 text-black border border-zinc-700/50'
        case 'danger':
            return 'bg-red-500 text-white border border-zinc-700/50'
        case 'primary':
        default:
            return 'bg-zinc-100 text-zinc-950 hover:bg-white border border-zinc-700/50';
    }
 };

 return(
    <button className={`px-3 py-1 rounded ${getVariantStyle()} ${className || ''}`} {...rest} >{children}</button>
 )
};