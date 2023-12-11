import React from "react";
function Header() {
    return (
        <div className="w-screen h-[70px] bg-[#96B1DC] flex justify-center items-center">
            <a href="Storage" className="w-[120px] h-10 rounded-xl border-4 border-[#5D75B1] text-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-white transition delay-50">STORAGE</a>
            <button className="w-[120px] h-10 rounded-xl border-4 border-[#5D75B1] text-[#5D75B1] text-center m-3 flex justify-center items-center text-sm hover:bg-white transition delay-50">DELIVERED ITEMS</button>
            <a href="Recieve" className="w-[120px] h-10 rounded-xl border-4 border-[#5D75B1] text-[#5D75B1] text-center m-3 flex justify-center items-center text-sm hover:bg-white transition delay-50">RECIEVE DELIVRY</a>
            <a href="Login" className="w-[120px] h-10 rounded-xl border-4 bg-[#5D75B1] border-[#5D75B1] text-white text-center m-3 flex justify-center items-center text-xl hover:bg-white transition delay-50">LOG OUT</a>
        </div>
    )
}
export default Header;