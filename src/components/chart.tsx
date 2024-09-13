
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'keep-react'


export const Chart = () => {
  const data = [
    {
      name: 'Mon',
      temp: 22,
      deg: 0,
    },
    {
      name: 'Tues',
      temp: 23,
      deg: 5,
    },
    {
      name: 'wed',
      temp: 20,
      deg: 10,
    },
    {
      name: 'Thu',
      temp: 24,
      deg: 15,
    },
    {
      name: 'Fri',
      temp: 19,
      deg: 20,
    },
    {
      name:'Sat',
      temp:20,
      deg:25
    },{
      name:"sun",
      temp:22,
      deg:30

    }
  ]


  
  return (
  <div className='w-[100%] h-[100vh] flex justify-center items-center  gradient font-sans'>
  <div className='xl:w-[70%] w-fit h-fit shadow-2xl rounded-xl p-5 morphism'>
    <h1 className='text-[20px] sm:text-[30px] lg:text-[40px] text-center lg:font-bold text-blue-600 cursor-pointer'>Weather Report</h1>
  <ResponsiveContainer width="100%" height={500} >
      <BarChart data={data}>
        <Bar radius={[8, 8, 0, 0]} barSize={40} dataKey="temp" className="fill-primary-500 dark:fill-primary-600 cursor-pointer" />
        
        <XAxis
          className="text-body-4 font-semibold text-xl text-metal-600 cursor-pointer"
          dataKey="name"
          stroke="#000000"
          tickSize={20}
          tickLine={false}
          strokeWidth={2}
        />
        <YAxis
          className="text-body-4 text-xl font-medium text-metal-600"
          tickSize={20}
          dataKey="deg"
          stroke="#000000"
          tickLine={true}
          strokeWidth={2}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>

  </div>
  )
}

