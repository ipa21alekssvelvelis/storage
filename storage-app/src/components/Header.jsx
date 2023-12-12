import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import { getWithExpiry } from '../utils/localStorageUtils';
function Header() {
    const role = getWithExpiry('role');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('role');
        window.location.href = 'http://localhost:3000/Login';
    };

    const renderLinksBasedOnRole = (role) => {
        if (role == 1) {
            return (
              <>
                <Link to="/UserAction" className="w-[120px] h-10 rounded-xl border-4 border-[#5D75B1] text-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-white transition delay-50">USERS</Link>
                <Link to="/Storage" className="w-[120px] h-10 rounded-xl border-4 border-[#5D75B1] text-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-white transition delay-50">STORAGE</Link>
                <Link to="/Deliver" className="w-[120px] h-10 rounded-xl border-4 border-[#5D75B1] text-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-white transition delay-50">DELIVERY</Link>
                <Link to="/Receive" className="w-[120px] h-10 rounded-xl border-4 border-[#5D75B1] text-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-white transition delay-50">RECEIVE</Link>
                <Link to="/Shelves" className="w-[120px] h-10 rounded-xl border-4 border-[#5D75B1] text-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-white transition delay-50">SHELVES</Link>
              </>
            );
        } else if (role == 2){
            return (
              <>
                <Link to="/Storage" className="w-[120px] h-10 rounded-xl border-4 border-[#5D75B1] text-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-white transition delay-50">STORAGE</Link>
                <Link to="/Receive" className="w-[120px] h-10 rounded-xl border-4 border-[#5D75B1] text-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-white transition delay-50">RECEIVE</Link>
                <Link to="/Delivery" className="w-[120px] h-10 rounded-xl border-4 border-[#5D75B1] text-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-white transition delay-50">DELIVERY</Link>
              </>
            );
        } else if (role == 3){
            return (
              <>
                <Link to="/Storage" className="w-[120px] h-10 rounded-xl border-4 border-[#5D75B1] text-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-white transition delay-50">STORAGE</Link>
                <Link to="/Shelves" className="w-[120px] h-10 rounded-xl border-4 border-[#5D75B1] text-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-white transition delay-50">SHELVES</Link>
              </>
            );
        }else if (role == 4){
            return (
              <>
                <Link to="/UserAction" className="w-[120px] h-10 rounded-xl border-4 border-[#5D75B1] text-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-white transition delay-50">USERS</Link>
                <Link to="/Storage" className="w-[120px] h-10 rounded-xl border-4 border-[#5D75B1] text-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-white transition delay-50">STORAGE</Link>
                <Link to="/Delivery" className="w-[120px] h-10 rounded-xl border-4 border-[#5D75B1] text-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-white transition delay-50">DELIVERY</Link>
                <Link to="/Receive" className="w-[120px] h-10 rounded-xl border-4 border-[#5D75B1] text-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-white transition delay-50">RECEIVE</Link>
                <Link to="/Shelves" className="w-[120px] h-10 rounded-xl border-4 border-[#5D75B1] text-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-white transition delay-50">SHELVES</Link>
              </>
            );
        }else{
            return null;   
        }
    }
    return (
        <div className="w-screen h-[70px] bg-[#96B1DC] flex justify-center items-center">
            {renderLinksBasedOnRole(role)}
            <button onClick={handleLogout} className="w-[120px] h-10 rounded-xl border-4 bg-[#5D75B1] border-[#5D75B1] text-white text-center m-3 flex justify-center items-center text-xl hover:bg-white transition delay-50">LOG OUT</button>
        </div>
    )
}
export default Header;