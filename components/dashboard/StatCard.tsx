import { Card } from "../ui/Card";

export function StatCard({title, value}:{
    title: string
    value: number
}){
    return(
        <Card>
            <h3 className="text-sm text-gray-500">{title}</h3>
            <p className="text-xl text-gray-900">{value}</p>
        </Card>
    )
}
