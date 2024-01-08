import React, { useEffect, useState } from 'react';

function Shelves() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost/api/api.php');
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div className='w-screen h-screen bg-[#0B1B28] flex justify-center items-top overflow-hidden'>
        <div className='w-5/6 h-4/5 bg-[#96B1DC] rounded-2xl flex flex-col m-5'>
          <div className='w-full h-13 bg-[#6C8FC7] rounded-tl-2xl rounded-tr-2xl flex justify-center items-center'>
            <div className='w-1/5 h-9 bg-[#5D75B1] m-5 rounded-md text-white text-xl flex justify-center items-center'>
              Name
            </div>
            <div className='w-1/5  h-9 bg-[#5D75B1] m-5 rounded-md text-white text-xl flex justify-center items-center'>
              Quantity
            </div>
            <div className='w-1/5 h-9 bg-[#5D75B1] m-5 rounded-md text-white text-xl flex justify-center items-center'>
              Photo
            </div>

          </div>
          {data.map(item => (
            <div key={item.id} className='border-b-4 border-[#5D75B1] w-full h-20 flex justify-center items-center'>
              <div className='w-1/5 h-9 bg-[#6C8FC7] m-5 rounded-md text-xl flex justify-center items-center'>
                {item.name}
              </div>
              <div className='w-1/5  h-9 bg-[#6C8FC7] m-5 rounded-md text-xl flex justify-center items-center'>
                {item.quantity}
              </div>
              <div className='w-1/5 h-9 bg-[#6C8FC7] m-5 rounded-md text-xl flex justify-center items-center'>
                <img src={item.photo} alt={item.name} className='h-full w-full object-cover' />
              </div>
  
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Shelves;
