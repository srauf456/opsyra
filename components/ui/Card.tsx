
type CardProps ={
    title: string;
    value: string;
    theme?: 'light' | 'dark';
};
export function Card({title, value, theme = 'light'} : CardProps){
    
return(
    <div className={theme === "dark" ? "bg-gray-700 text-white"  : "bg-white text-black"}>
    <div className="rounded shadow p-4 flex justify-between flex-col ">
        <h3 className="text-lg font-semibold">{title} </h3>
        <p className="text-2xl font-bold">{value}</p>
        </div>
    </div>
);
}
