import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';


const COLORS = ['#0088FE', '#00C49F'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function DynamicPieChart({ data }) {
  return (
    <div>
        <ResponsiveContainer width="100%" height={600} >
      <PieChart width={400} height={400}  >
        <Pie
        
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
    <div className='flex justify-center gap-10'>
    <div className='flex items-center gap-2' >
        <p>My donation</p>
        <p className="mx-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#0088FE]"></p>
        
    </div>
    <div className='flex items-center gap-2'>
        <p>Total donation</p>
        <p className="mx-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#00C49F]"></p>
    </div>
    </div>
    </div>
  );
}

export default DynamicPieChart;