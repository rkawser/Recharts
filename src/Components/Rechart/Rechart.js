import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Rechart = () => {
    const data = [
        {
            name: 'Page A',
            price: 2000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            price: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            price: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            price: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            price: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            price: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            price: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <div>
            <div className='grid  grid-flow-col'>
                <div className='h-96'>
                    <LineChart width={400} height={500} data={data}>
                       <Line dataKey={'price'}></Line>
                       <Tooltip></Tooltip>
                       <XAxis dataKey={'name'}></XAxis>
                       <YAxis></YAxis>
                    </LineChart>
                </div>

                <div >
                    <h2>card one</h2>
                </div>
            </div>
        </div>
    );
};

export default Rechart;