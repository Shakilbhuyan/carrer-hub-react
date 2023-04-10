import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const numbers = [
        { assignment: "Assignment 1", mark: 57 },
        { assignment: "Assignment 2", mark: 59 },
        { assignment: "Assignment 3", mark: 58 },
        { assignment: "Assignment 4", mark: 56 },
        { assignment: "Assignment 5", mark: 60 },
        { assignment: "Assignment 6", mark: 29 },
        { assignment: "Assignment 7", mark: 58 },
        { assignment: "Assignment 8", mark: 57 }
    ]

    return (
        <div>
            <AreaChart
                width={700}
                height={400}
                data={numbers}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="assignment" />
                <YAxis/>
                <Tooltip />
                <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    );
};

export default Statistics;