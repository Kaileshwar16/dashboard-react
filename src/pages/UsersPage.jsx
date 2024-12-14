import Header from "../components/Header"
import StatCard from "../components/StatCard"
import {motion} from "framer-motion"
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react"
const UsersPage = () =>
{
    return (
        <div className="w-screen">
        <Header title="Users"/>
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
        </main>
        </div>
    )
}
export default UsersPage;