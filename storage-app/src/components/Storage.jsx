import React from "react";
import Header from "./Header";
import { getWithExpiry } from '../utils/localStorageUtils';
function Storage() {
    const role = getWithExpiry('role');
    console.log(role);
    return (
        <>
            <Header></Header>
            {/*bg*/}<div className="w-screen h-screen bg-[#0B1B28] flex justify-center items-top">

                <div className="w-5/6 h-4/5 bg-[#96B1DC] rounded-2xl flex flex-col m-5">
                    {/*Categories*/}<div className="w-full h-13 bg-[#6C8FC7] rounded-tl-2xl rounded-tr-2xl flex justify-center items-center">
                    {/*Name*/}<div className="w-[15%] h-9 bg-[#5D75B1] m-5 rounded-md text-white text-xl flex justify-center items-center">Name</div>
                    {/*Size*/}<div className="w-[15%] h-9 bg-[#5D75B1] m-5 rounded-md text-white text-xl flex justify-center items-center">Size</div>
                    {/*quantity*/}<div className="w-[15%]  h-9 bg-[#5D75B1] m-5 rounded-md text-white text-xl flex justify-center items-center">Quantity</div>
                    {/*Photo*/}<div className="w-[15%] h-9 bg-[#5D75B1] m-5 rounded-md text-white text-xl flex justify-center items-center">Photo</div>
                    {/*In stock*/}<div className="w-[15%] h-9 bg-[#5D75B1] m-5 rounded-md text-white text-xl flex justify-center items-center">In Stock</div>
                    {/*Add*/}<div className="w-[15%] h-9 bg-[#5D75B1] m-5 rounded-md text-white text-xl flex justify-center items-center">To shelves</div>
                </div>
                    {/*Rinda*/}<div className="border-b-4 border-[#5D75B1] w-full h-20 flex">
                    {/*Name*/}<div className="w-1/6 h-full flex flex-col justify-center items-center">
                    <h1 className="text-white text-2xl">Nike air</h1>
                </div>
                    {/*Size*/}<div className="w-1/6 h-full flex flex-col overflow-scroll justify-center items-center">
                    <h1 className="text-white text-2xl mt-5">45</h1>
                    <h1 className="text-white text-2xl">32</h1>
                    <h1 className="text-white text-2xl">36</h1>
                </div>
                    {/*quantity*/}<div className="w-1/6 h-full flex flex-col justify-center items-center">
                    <h1 className="text-white text-2xl">36</h1>
                </div>
                    {/*Photo*/}<div className="w-1/6 h-full flex flex-col justify-center items-center">
                    {/*Photo*/}<img src="images/air.png" className=" h-full flex flex-col justify-center items-center"></img>
                </div>
                    {/*In stock*/}<div className="w-1/6 h-full flex flex-col justify-center items-center">
                    <h1 className="text-white text-2xl">Yes</h1>
                </div>
                    {/*To shelves*/}<div className="w-1/6 h-full flex flex-col justify-center items-center">
                    <button className="w-[120px] h-10 rounded-xl border-4 border-[#5D75B1] text-[#5D75B1] text-center m-3 flex justify-center items-center text-sm hover:bg-white transition delay-50">ADD TO SHELVES</button>
                </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Storage;