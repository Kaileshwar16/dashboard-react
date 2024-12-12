import { BarChart2, DollarSign, Link, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from "lucide-react"
import { useState } from "react"
import {AnimatePresence, motion} from "framer-motion"
import {Link as IconL} from "react-router-dom"
const SIDEBAR_ITEMS =[
    {
        name:"Overview",icon:BarChart2,color:"#008585",path:"/"
    },
    {
        name:"Products",icon:ShoppingBag,color:"#74a892",path:"/Products"
    },
    {
        name:"Users",icon:Users,color:"#fbf2c4",path:"/Users"
    },
    {
        name:"Sales",icon:DollarSign,color:"#6366f1",path:"/Sales"
    },
    {
        name:"Order",icon:ShoppingCart,color:"#c7522a",path:"/Order"
    },
    {
        name:"Analytics",icon:TrendingUp,color:"#d74a49",path:"/Analytics"
    },
    {
        name:"Settings",icon:Settings,color:"#e5c185",path:"/Settings"
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
                <nav className="mt-8 flex-grow">
                    {SIDEBAR_ITEMS.map((item) =>
                    {
                        return (<IconL key={item.path} to={item.path}>
                            <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
                                <item.icon size={20} style={{color:item.color,minWidth:"20px"}}/>

                                <AnimatePresence>
                                    {isSidebarOpen && <motion.span
                                    className="ml-4 whitespace-nowrap"
                                    initial={{opacity:0,width:0}}
                                    animate={{opacity:1,width:"auto"}}
                                    exit={{opacity:0,width:0}}
                                    transition={{duration:0.2,delay:0.3}}>
                                        
                                        {item.name}
                                        </motion.span>}
                                </AnimatePresence>
                            </motion.div>
                        </IconL>
                    )})}
                </nav>
            </div>
        </motion.div>
    )
}
export default Sidebar