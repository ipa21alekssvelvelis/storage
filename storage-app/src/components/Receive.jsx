import React, { useState, useEffect } from "react";
import Header from "./Header";

function Receive() {
    const [shoesData, setShoesData] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [newItem, setNewItem] = useState({
        name: "",
        size: "",
        date: "",
        quantity: "",
        photo: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8888/storage/utilities/output.php')
                const data = await response.json();
                setShoesData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    
    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem((prevItem) => ({
            ...prevItem,
            [name]: value,
        }));
    };

    const handleAddItem = () => {
        // Add logic to handle adding item to the list
        // You can use the values from newItem state
        closePopup();
    };

    return (
        <>
            <Header />

            <div className="w-screen min-h-screen bg-[#0B1B28] flex flex-col justify-top items-center">
                <div className="w-5/6 min-h-[500px] bg-[#96B1DC] rounded-2xl flex flex-col m-5 max-[600px]:w-full">
                    <div className="w-full h-13 bg-[#6C8FC7] rounded-tl-2xl rounded-tr-2xl flex justify-center items-center">
                        <div className="w-1/5 h-9 bg-[#5D75B1] m-5 rounded-md text-white text-xl flex justify-center items-center max-[600px]:m-1 max-[600px]:w-1/6 max-[600px]:text-xs">Name</div>
                        <div className="w-1/5 h-9 bg-[#5D75B1] m-5 rounded-md text-white text-xl flex justify-center items-center max-[600px]:m-1 max-[600px]:w-1/6 max-[600px]:text-xs">Size</div>
                        <div className="w-1/5 h-9 bg-[#5D75B1] m-5 rounded-md text-white text-xl flex justify-center items-center max-[600px]:m-1 max-[600px]:w-1/6 max-[600px]:text-xs">Date</div>
                        <div className="w-1/5 h-9 bg-[#5D75B1] m-5 rounded-md text-white text-xl flex justify-center items-center max-[600px]:m-1 max-[600px]:w-1/6 max-[600px]:text-xs">Quantity</div>
                        <div className="w-1/5 h-9 bg-[#5D75B1] m-5 rounded-md text-white text-xl flex justify-center items-center max-[600px]:m-1 max-[600px]:w-1/6 max-[600px]:text-xs">Photo</div>
                        <div className="w-1/5 h-9 bg-[#5D75B1] m-5 rounded-md text-white text-xl flex justify-center items-center max-[600px]:m-1 max-[600px]:w-1/6 max-[600px]:text-xs">Receive</div>
                    </div>

                    {/* Display shoe data */}
                    {shoesData.map((shoe, index) => (
                        <div key={index} className="border-b-4 border-[#5D75B1] w-full h-20 flex">
                            <div className="w-1/5 h-full flex flex-col justify-center items-center">
                                <h1 className="text-white text-2xl max-[600px]:text-xs">{shoe.name}</h1>
                            </div>
                            <div className="w-1/5 h-full flex flex-col justify-center items-center">
                                <h1 className="text-white text-2xl max-[600px]:text-xs">{shoe.size}</h1>
                            </div>
                            <div className="w-1/5 h-full flex flex-col justify-center items-center">
                                <h1 className="text-white text-2xl max-[600px]:text-xs">{shoe.date}</h1>
                            </div>
                            <div className="w-1/5 h-full flex flex-col justify-center items-center">
                                <h1 className="text-white text-2xl max-[600px]:text-xs">{shoe.quantity}</h1>
                            </div>
                            <div className="w-1/5 h-full flex flex-col justify-center items-center">
                                <img
                                    src={shoe.photo}
                                    alt="Shoe"
                                    className="object-cover w-2/3 h-[90%]"
                                />
                            </div>
                            <div className="w-1/5 h-full flex flex-col justify-center items-center">
                                <button className="w-[120px] h-10 rounded-md border-2 border-[#5D75B1] text-[#5D75B1] text-center m-3 flex justify-center items-center text-sm hover:bg-white max-[600px]:w-full">RECEIVE</button>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className="fixed bottom-10 right-10 w-[100px] h-10 rounded-md border-2 border-[#5D75B1] text-[#5D75B1] bg-white text-center m-1 flex justify-center items-center text-sm hover:bg-[#becfeb]" onClick={openPopup}>ADD
                </button>

                {isPopupOpen && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-8 rounded-lg">
                            <h1 className="text-2xl mb-4 text-center">Add Item</h1>
                            <form className="flex flex-col">
                                <input
                                    type="text"
                                    name="name"
                                    value={newItem.name}
                                    onChange={handleInputChange}
                                    className="m-1 bg-gray-100"
                                    placeholder="Enter Name"
                                />
                                <input
                                    type="number"
                                    name="size"
                                    value={newItem.size}
                                    onChange={handleInputChange}
                                    className="m-1 bg-gray-100"
                                    placeholder="Enter Size"
                                />
                                <input
                                    type="date"
                                    name="date"
                                    value={newItem.date}
                                    onChange={handleInputChange}
                                    className="m-1 bg-gray-100"
                                />
                                <input
                                    type="number"
                                    name="quantity"
                                    value={newItem.quantity}
                                    onChange={handleInputChange}
                                    className="m-1 bg-gray-100"
                                    placeholder="Enter Quantity"
                                />
                                <input
                                    type="text"
                                    name="photo"
                                    value={newItem.photo}
                                    onChange={handleInputChange}
                                    className="m-1 bg-gray-100"
                                    placeholder="Enter Photo URL"
                                />
                            </form>
                            <div className="flex justify-center mt-4">
                                <button
                                    className="w-[80px] h-8 rounded-md border-2 border-[#5D75B1] text-[#5D75B1] bg-white hover:bg-gray-200"
                                    onClick={closePopup}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="w-[80px] h-8 rounded-md border-2 border-[#5D75B1] text-white bg-[#5D75B1] hover:bg-[#4C6290] ml-2"
                                    onClick={handleAddItem}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Receive;
