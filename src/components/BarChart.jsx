import { BarChart,ResponsiveContainer ,Tooltip,Bar,Legend,XAxis,YAxis,CartesianGrid} from "recharts";
import {motion} from "framer-motion"
const salesData = [
    { name: "Jul", sales: 4200 },
	{ name: "Aug", sales: 3800 },
	{ name: "Sep", sales: 5100 },
	{ name: "Oct", sales: 4600 },
	{ name: "Nov", sales: 5400 },
	{ name: "Dec", sales: 7200 },
	{ name: "Jan", sales: 6100 },
	{ name: "Feb", sales: 5900 },
	{ name: "Mar", sales: 6800 },
	{ name: "Apr", sales: 6300 },
	{ name: "May", sales: 7100 },
	{ name: "Jun", sales: 7500 },
]
const SalesBarChart = () =>
{
    return(
        <motion.div initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{delay:0.3}}
        className="h-64 w-full">
        
                <ResponsiveContainer>
                    
                    <BarChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip 
                             contentStyle={{
                                backgroundColor: "rgba(31, 41, 55, 0.8)",
                                borderColor: "#4B5563",
                            }}
                            itemStyle={{ color: "#10B981" }}/>
                            
                            <Bar dataKey="sales" fill="#AD49E1" />
                            
                    </BarChart>
                    
                </ResponsiveContainer>
            
        </motion.div>
    )
}

export default SalesBarChart;