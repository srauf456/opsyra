import { Card } from "../ui/Card";

export function StatCard({title, value}:{
    title: string
    value: number
}){
    return(
        <Card>
            <p className="text-xs font-medium uppercase text-gray-500">{title}</p>
            <p className="text-2xl text-gray-900 mt-1">{value}</p>
        </Card>
    )
}
