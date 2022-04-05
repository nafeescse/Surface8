import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [chart, setChart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChart(data))
    }, [chart]);

    return (
        <div className='p-10 grid grid-cols-1 lg:grid-cols-2 '>

            <div className='w-10/12 mx-auto'>
                <AreaChart width={600} height={250} data={chart}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="50%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                        {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="50%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient> */}
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorUv)" />

                </AreaChart>
                <p className='text-center text-xl font-bold'>Figure: Area-chart of revenue from Mar-Oct 2021</p>
            </div>

            <div>
                <PieChart width={600} height={320}>
                    <Pie data={chart} dataKey="sell" nameKey="month" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" />
                    <Pie data={chart} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={80} outerRadius={135} fill="#82ca9d" label />
                    <Tooltip />
                </PieChart>

                <p className='text-center text-xl font-bold'>Figure: Pie-chart of sell and revenue from Mar-Oct 2021</p>
            </div>


            <div>
                <BarChart
                    width={500}
                    height={300}
                    data={chart}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sell" stackId="a" fill="#8884d8" />
                </BarChart>
                <p className='text-center text-xl font-bold'>Figure: Bar-chart of sell from Mar-Oct 2021</p>
            </div>

        </div>

    );
};


export default Dashboard;