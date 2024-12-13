const StatCard =(prop)=>
{
    return (
            <div className="backdrop-blur-0 border border-gray-600 p-6 bg-gray-800 rounded shadow-md">
            <div className="flex text-xs items-center mb-4">
            <prop.icon size={14} style={{color:prop.color}}></prop.icon>
            <div className="ml-2 text-gray-400">{prop.name}</div>
            </div>
            <div>{prop.value}</div>
            </div>
    )
}
export default StatCard