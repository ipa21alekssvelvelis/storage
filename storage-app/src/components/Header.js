import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="w-screen h-[70px] bg-[#96B1DC] flex justify-center items-center">
            <Link to="/Shelves" className="w-[120px] h-10 rounded-xl border-4 border-[#5D75B1] text-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-white transition delay-50">SHELVES</Link>
            <Link to="/Storage" className="w-[120px] h-10 rounded-xl border-4 border-[#5D75B1] text-[#5D75B1] text-center m-3 flex justify-center items-center text-sm hover:bg-white transition delay-50">STORAGE</Link>
            <Link to="/Login" className="w-[120px] h-10 rounded-xl border-4 bg-[#5D75B1] border-[#5D75B1] text-white text-center m-3 flex justify-center items-center text-xl transition delay-50">LOG OUT</Link>
        </div>
    )
}

export default Header;
