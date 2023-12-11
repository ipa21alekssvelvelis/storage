import React from "react";
function Login() {
    return (
        <div className="w-screen h-screen bg-[#0B1B28] flex justify-center items-center">
            <div className="w-2/3 h-2/3 bg-[#516AA9] rounded-2xl flex">
                <div className="h-full w-1/2 rounded-bl-2xl rounded-tl-2xl">
                    <img src="/images/gif.gif" alt="bilde" className="rounded-lg shadow-md w-full h-full rounded-bl-2xl rounded-tl-2xl">
                    </img>
                </div>
                <div className="h-full w-1/2 justify-center items-center flex flex-col">
                    <div className="w-1/2 bg-[#6682C7] rounded-md flex justify-center items-center m-2 shadow-md">
                        <h1 className="text-white w-full h-full flex items-center justify-center text-2xl m-2">STORAGE SYSTEM</h1>
                    </div>
                    <form className="flex flex-col justify-center items-center w-full m-10 mt-20 h-1/3">
                        <div className="mb-4">
                            <label className="absolute mt-[13px]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-neutral-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                            </label>
                            <input type="text" id="username" name="username" placeholder="Username" className="indent-4 text-xl mt-1 p-2 border rounded-md w-80"></input>
                        </div>
                        <div className="mb-4">
                            <label className="absolute mt-[16px]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-neutral-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                            </label>
                            <input type="password" id="password" name="password" placeholder="Password" className="indent-4 text-xl mt-2 mb-10 p-2 border rounded-md w-80"></input>
                        </div>

                        <button type="submit" className="bg-[#D3E8FE] w-1/3 text-[#516AA9] text-xl p-2 rounded-md hover:bg-[#A2CFFF] transition delay-10">SIGN IN </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;