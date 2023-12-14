import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { getWithExpiry } from '../utils/localStorageUtils';
function Header() {
    const role = getWithExpiry('role');

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('role');
        window.location.href = 'http://localhost:3000/Login';
    };

    const renderLinksBasedOnRole = (role) => {
        if (role == 1) {
            return (
              <>
                <Link to="/UserAction" className="max-[770px]:w-[40%] max-[770px]:p-4 max-[770px]:h-[8%] max-[770px]:my-8 max-[770px]:-mt-12 max-[770px]:text-2xl max-[770px]:font-light max-[770px]:border-[2.5px] w-[120px] h-10 rounded-xl border border-[#5D75B1] text-white bg-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-[#56699A] transition delay-50 hover:border-neutral-200">USERS</Link>
                <Link to="/Storage" className="max-[770px]:w-[40%] max-[770px]:p-4 max-[770px]:h-[8%] max-[770px]:my-8 max-[770px]:text-2xl max-[770px]:font-light max-[770px]:border-[2.5px] w-[120px] h-10 rounded-xl border border-[#5D75B1] text-white bg-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-[#56699A] transition delay-50 hover:border-neutral-200">STORAGE</Link>
                <Link to="/Deliver" className="max-[770px]:w-[40%] max-[770px]:p-4 max-[770px]:h-[8%] max-[770px]:my-8 max-[770px]:text-2xl max-[770px]:font-light max-[770px]:border-[2.5px] w-[120px] h-10 rounded-xl border border-[#5D75B1] text-white bg-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-[#56699A] transition delay-50 hover:border-neutral-200">DELIVERY</Link>
                <Link to="/Receive" className="max-[770px]:w-[40%] max-[770px]:p-4 max-[770px]:h-[8%] max-[770px]:my-8 max-[770px]:text-2xl max-[770px]:font-light max-[770px]:border-[2.5px] w-[120px] h-10 rounded-xl border border-[#5D75B1] text-white bg-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-[#56699A] transition delay-50 hover:border-neutral-200">RECEIVE</Link>
                <Link to="/Shelves" className="max-[770px]:w-[40%] max-[770px]:p-4 max-[770px]:h-[8%] max-[770px]:my-8 max-[770px]:text-2xl max-[770px]:font-light max-[770px]:border-[2.5px] w-[120px] h-10 rounded-xl border border-[#5D75B1] text-white bg-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-[#56699A] transition delay-50 hover:border-neutral-200">SHELVES</Link>
              </>
            );
        } else if (role == 2){
            return (
              <>
                <Link to="/Storage" className="max-[770px]:w-[40%] max-[770px]:p-4 max-[770px]:h-[8%] max-[770px]:my-8 max-[770px]:text-2xl max-[770px]:font-light max-[770px]:border-[2.5px] w-[120px] h-10 rounded-xl border border-[#5D75B1] text-white bg-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-[#56699A] transition delay-50 hover:border-neutral-200">STORAGE</Link>
                <Link to="/Deliver" className="max-[770px]:w-[40%] max-[770px]:p-4 max-[770px]:h-[8%] max-[770px]:my-8 max-[770px]:text-2xl max-[770px]:font-light max-[770px]:border-[2.5px] w-[120px] h-10 rounded-xl border border-[#5D75B1] text-white bg-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-[#56699A] transition delay-50 hover:border-neutral-200">DELIVERY</Link>
                <Link to="/Receive" className="max-[770px]:w-[40%] max-[770px]:p-4 max-[770px]:h-[8%] max-[770px]:my-8 max-[770px]:text-2xl max-[770px]:font-light max-[770px]:border-[2.5px] w-[120px] h-10 rounded-xl border border-[#5D75B1] text-white bg-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-[#56699A] transition delay-50 hover:border-neutral-200">RECEIVE</Link>
              </>
            );
        } else if (role == 3){
            return (
              <>
                <Link to="/Storage" className="max-[770px]:w-[40%] max-[770px]:p-4 max-[770px]:h-[8%] max-[770px]:my-8 max-[770px]:text-2xl max-[770px]:font-light max-[770px]:border-[2.5px] w-[120px] h-10 rounded-xl border border-[#5D75B1] text-white bg-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-[#56699A] transition delay-50 hover:border-neutral-200">STORAGE</Link>
                <Link to="/Shelves" className="max-[770px]:w-[40%] max-[770px]:p-4 max-[770px]:h-[8%] max-[770px]:my-8 max-[770px]:text-2xl max-[770px]:font-light max-[770px]:border-[2.5px] w-[120px] h-10 rounded-xl border border-[#5D75B1] text-white bg-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-[#56699A] transition delay-50 hover:border-neutral-200">SHELVES</Link>
              </>
            );
        }else if (role == 4){
            return (
              <>
                <Link to="/UserAction" className="max-[770px]:w-[40%] max-[770px]:p-4 max-[770px]:h-[8%] max-[770px]:my-8 max-[770px]:-mt-12 max-[770px]:text-2xl max-[770px]:font-light max-[770px]:border-[2.5px] w-[120px] h-10 rounded-xl border border-[#5D75B1] text-white bg-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-[#56699A] transition delay-50 hover:border-neutral-200">USERS</Link>
                <Link to="/Storage" className="max-[770px]:w-[40%] max-[770px]:p-4 max-[770px]:h-[8%] max-[770px]:my-8 max-[770px]:text-2xl max-[770px]:font-light max-[770px]:border-[2.5px] w-[120px] h-10 rounded-xl border border-[#5D75B1] text-white bg-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-[#56699A] transition delay-50 hover:border-neutral-200">STORAGE</Link>
                <Link to="/Deliver" className="max-[770px]:w-[40%] max-[770px]:p-4 max-[770px]:h-[8%] max-[770px]:my-8 max-[770px]:text-2xl max-[770px]:font-light max-[770px]:border-[2.5px] w-[120px] h-10 rounded-xl border border-[#5D75B1] text-white bg-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-[#56699A] transition delay-50 hover:border-neutral-200">DELIVERY</Link>
                <Link to="/Receive" className="max-[770px]:w-[40%] max-[770px]:p-4 max-[770px]:h-[8%] max-[770px]:my-8 max-[770px]:text-2xl max-[770px]:font-light max-[770px]:border-[2.5px] w-[120px] h-10 rounded-xl border border-[#5D75B1] text-white bg-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-[#56699A] transition delay-50 hover:border-neutral-200">RECEIVE</Link>
                <Link to="/Shelves" className="max-[770px]:w-[40%] max-[770px]:p-4 max-[770px]:h-[8%] max-[770px]:my-8 max-[770px]:text-2xl max-[770px]:font-light max-[770px]:border-[2.5px] w-[120px] h-10 rounded-xl border border-[#5D75B1] text-white bg-[#5D75B1] text-center m-3 flex justify-center items-center text-md hover:bg-[#56699A] transition delay-50 hover:border-neutral-200">SHELVES</Link>
              </>
            );
        }else{
            return null;   
        }
    }
    return (
        <>
            <div className="w-screen h-[70px] bg-[#96B1DC] flex justify-between items-center">
                <div className="flex items-center">
                    {role && (
                        <button onClick={toggleMobileMenu} className="hidden max-[770px]:flex p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    )}
                    <div className="flex max-[770px]:hidden">
                        {renderLinksBasedOnRole(role)}
                    </div>
                </div>
                {role && (
                    <button onClick={handleLogout} className="max-[770px]:font-light max-[770px]:text-2xl w-[120px] h-10 rounded-xl border bg-[#5D75B1] border-[#5D75B1] text-white text-center m-3 flex justify-center items-center text-xl hover:bg-[#56699A] transition delay-50 hover:border-neutral-200">LOG OUT</button>
                )}
            </div>
            {isMobileMenuOpen && (
                <div className="w-full h-full absolute z-50 flex flex-col justify-center items-center bg-[#96B1DC]">
                    {renderLinksBasedOnRole(role)}
                </div>
            )}
        </>
    );
}
export default Header;