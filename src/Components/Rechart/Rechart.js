import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Rechart = () => {
    const data = [
        {
            name: 'suplyer A',
            price: 2000,
            month: 2,
            pv: 200,
            amt: 2400,
        },
        {
            name: 'suplyer B',
            price: 3000,
            month: 3,
            pv: 198,
            amt: 2210,
        },
        {
            name: 'suplyer C',
            price: 2000,
            month: 2,
            pv: 980,
            amt: 2290,
        },
        {
            name: 'suplyer D',
            price: 2780,
            pv: 3908,
            month: 2.5,
            amt: 2000,
        },
        {
            name: 'suplyer E',
            price: 1890,
            month: 1.5,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'suplyer F',
            price: 2390,
            month: 2.3,
            pv: 300,
            amt: 2500,
        },
        {
            name: 'suplyer G',
            price: 3490,
            month: 3.5,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
            <div className='grid  grid-flow-col mt-5 '>
                <div className='h-96 '>
                    <LineChart width={500} height={450} data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="2 2" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="price" stroke="#8884d8" />
                        <Line dataKey="month" stroke="#82c9d" />
                        <Line type="monotone" dataKey="pv" stroke="#82ca9d"></Line>
                        <Line dataKey={'amt'}></Line>
                    </LineChart>
                </div>
                
                <div  className=''>
                <BarChart width={600} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="price" fill="#8884d8" />
                    <Bar dataKey="amt" fill="#82ca9d" />
                    <Bar dataKey="pv" fill="#82ca9d" />
                </BarChart>
                </div>
            </div>
    );
};

export default Rechart;