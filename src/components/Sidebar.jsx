import { BarChart2, DollarSign, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from "lucide-react"
import { useState } from "react"
import {motion} from "framer-motion"
const SIDEBAR_ITEMS =[
    {
        name:"Overview",icon:BarChart2,color:"#6366f1",path:"/"
    },
    {
        name:"Products",icon:ShoppingBag,color:"#6366f1",path:"/Products"
    },
    {
        name:"Users",icon:Users,color:"#6366f1",path:"/Users"
    },
    {
        name:"Sales",icon:DollarSign,color:"#6366f1",path:"/Sales"
    },
    {
        name:"Order",icon:ShoppingCart,color:"#6366f1",path:"/Order"
    },
    {
        name:"Analytics",icon:TrendingUp,color:"#6366f1",path:"/Analytics"
    },
    {
        name:"Settings",icon:Settings,color:"#6366f1",path:"/Settings"
    }
]
const Sidebar =()=>
{   const [isSidebarOpen,setIsSidebarOpen] = useState(true)

    return(
        <motion.div
        className={`relative z-10 transition-all duration-200 ease-in-out flex-shrink-0   ${isSidebarOpen ? 'w-64': "w-20"}`}
        animate={{width:isSidebarOpen?256:80}}>
            <div className="h-full  bg-gray-800 bg-opacity-100 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
                <motion.button
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                onClick={()=>setIsSidebarOpen(!isSidebarOpen)}
                className="hover:bg-gray-700 rounded-full p-2 transition-colors max-w-fit"

                >
                    <Menu size={24}/>
                </motion.button>
                
            </div>
        </motion.div>
    )
}
export default Sidebar