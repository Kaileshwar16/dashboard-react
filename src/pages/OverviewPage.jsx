import Header from "../components/Header"
import StatCard from "../components/StatCard"
import {motion} from "framer-motion"
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react"
import SalesOverviewChart from "../components/SalesOverviewChart"
import CategoryDistributionChart from "../components/CategoryDistributionChart"
import SalesBarChart from "../components/BarChart"
const OverviewPage = () =>
{
    return (
        <div className="w-screen overflow-auto backdrop-blur-lg">
        <Header title="Overview"/>
        <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 ">
            <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2  lg:grid-cols-4 mb-8"
            initial ={{opacity:0,y:20}}
            animate ={{opacity:1,y:0}}
            transition ={{duration:1}}>
            <StatCard name="Total Sales" icon={Zap} value ="12,345" color = "#008585"/>
            <StatCard name ="New User" icon={Users} value="1234" color="#74a892"/>
            <StatCard name ="Total Product" icon={ShoppingBag} value="567" color="#fbf2c4"/>
            <StatCard name ="Conversion Rate" icon={BarChart2} value="12.5%" color="#6366f1"/>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                <div><SalesOverviewChart/></div>
                <div><CategoryDistributionChart/></div>
                
                <div className="lg:col-span-2">
                <SalesBarChart/>
                </div>
                

            </div>
        </main>
        </div>
    )
}
export default OverviewPage
