import React from 'react'

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts"

export function Chart({ data }) {
    const { name, unit, period, description, values, height } = data
    const stats = values?.map(coords => {
        return ({ [period]: new Date(coords.x * 1000).toLocaleDateString(), [unit]: coords.y })
    })

    return (
        <div className="chart">
            <h4>{name}</h4>
            <p>{description}</p>
            <ResponsiveContainer width="100%" height={height || 300}>
            <AreaChart
                height={300}
                data={stats}
                margin={{
                    top: 20,
                    right: 0,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey={period}
                    interval={30}
                    // tickFormatter={date=>{
                    //     console.log(`date:`, date)
                    // }}
                />
                <YAxis tickFormatter={num => {
                    return (num/1000)+'K'
                }} />
                <Tooltip />
                <Area type="monotone" dataKey={unit} stroke='orange' fill='#2f2619' />
            </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}