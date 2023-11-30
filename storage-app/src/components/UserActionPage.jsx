import {useEffect, useState} from 'react';
import EditUserInfo from './EditUserInfo';
import Overlay from './Overlay';

function UserActionPage(){
    const [userList, setUserList] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
    useEffect(() => {
      fetch('http://localhost:8888/storage/utilities/getUsers.php')
        .then(response => {
        console.log(response.data);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(response => {
          setUserList(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

    const handleUserClick = (user) => {
      setSelectedUser(user);
      setIsEditModalOpen(true);
    };
  
    const handleCloseEdit = () => {
      setSelectedUser(null);
      setIsEditModalOpen(false);
    };
    return(
        <div className="min-h-full w-full flex flex-col">
            <div className='w-100 min-h-screen flex flex-col items-center overflow-auto'>
                <div className="border-b border-[#e5e7eb] dark:border-[#282f35] w-[85%] my-12 flex">
                    <div className='flex flex-col mx-6 w-full justify-center text-center'>
                        <h1 className="text-6xl mb-2 font-bold text-neutral-700 dark:text-[#b6c2cf]">User List</h1>
                        <p className="text-3xl mb-2 font-normal text-neutral-700 dark:text-[#b6c2cf]">Exact your discord privileges</p>
                    </div>
                </div>
                <div className='flex flex-wrap flex-grow w-full h-full justify-center '>
                    {userList.map((user) => (
                        <div key={user.userID} className='border-2 border-neutral-400 flex flex-col justify-center text-center items-center w-[300px] h-[200px] m-4 cursor-pointer hover:bg-neutral-200 hover:border-neutral-600 transition duration-300 ease-in-out' id={`userBox${user.userID}`} onClick={() => handleUserClick(user)}>
                            <h1 className='text-3xl font-medium my-4'>{user.username}</h1>
                        </div>
                    ))}
                </div>
            </div>
            <Overlay isOpen={isEditModalOpen} onClose={handleCloseEdit} />
            {selectedUser && (
                <EditUserInfo user={selectedUser} onClose={handleCloseEdit} />
            )}
        </div>
    );
}


export default UserActionPage;