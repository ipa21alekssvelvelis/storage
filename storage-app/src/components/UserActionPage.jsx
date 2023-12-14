import {useEffect, useState} from 'react';
import EditUserInfo from './EditUserInfo';
import CreateNewUser from './CreateNewUser';
import DeleteCertainUser from './DeleteCertainUser';
import Overlay from './Overlay';
import Header from "./Header";

function UserActionPage(){
    const [userList, setUserList] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isInsertModalOpen, setIsInsertModalOpen] = useState(false);
    
    const retrievedValue = localStorage.getItem('role');

    const getUserRole = (status) => {
        switch (status) {
            case "1":
                return 'Admin';
            case "2":
                return 'Noliktava';
            case "3":
                return 'Plaukti';
            case "4":
                return 'Headadmin';
            default:
                return 'Insignificant';
        }
    };
    useEffect(() => {
      fetch('http://localhost:8888/storage/utilities/getUsers.php')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(response => {
            const retrievedValueString = localStorage.getItem('role');
            const retrievedValue = JSON.parse(retrievedValueString).value;
            const parsedValue = parseInt(retrievedValue, 10);
            if(parsedValue === 4){
                const nonAdminUsers = response.data.filter(user => user.roleID !== "4");
                setUserList(nonAdminUsers);
                setFilteredUsers(nonAdminUsers);
            }else if (parsedValue === 1){
                const nonAdminUsers = response.data.filter(user => user.roleID !== "1" && user.roleID !== "4");
                setUserList(nonAdminUsers);
                setFilteredUsers(nonAdminUsers);
            }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

    const handleUserClick = (user) => {
        setSelectedUser(user);
        setIsEditModalOpen(true);
    };
  
    const handleCloseModal = () => {
        setSelectedUser(null);
        setIsEditModalOpen(false);
        setIsInsertModalOpen(false);
    };

    const handleDeleteUser = (userID) => {
        setFilteredUsers((prevUserList) => prevUserList.filter(user => user.userID !== userID));
        setIsEditModalOpen(false);
        setSelectedUser(null);
    };

    const handleUserInserted = () => {
        fetch('http://localhost:8888/storage/utilities/getUsers.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(response => {
                if(retrievedValue !== 4){
                    const nonAdminUsers = response.data.filter(user => user.roleID !== "1");
                    setUserList(nonAdminUsers);
                    setFilteredUsers(nonAdminUsers);
                }else{
                    setUserList(response.data);
                    setFilteredUsers(response.data);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [noMatch, setNoMatch] = useState(false);
    
    const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchValue(query);
    
        const filtered = userList.filter(
            (user) =>
                user.username.toLowerCase().includes(query) ||
                getUserRole(user.roleID).toLowerCase().includes(query)
        );
    
        setFilteredUsers(filtered);
        setNoMatch(filtered.length === 0);
    };

    // const retrievedValue = localStorage.getItem('role');
    // console.log(retrievedValue);
    return(
        <>
        <Header/>
        <div className="min-h-full w-full flex flex-col bg-[#96B1DC] text-white">
            <div className='w-100 min-h-screen flex flex-col items-center overflow-auto'>
                <div className="border-b border-[#e5e7eb] dark:border-[#282f35] w-[85%] my-12 flex">
                    <div className='flex flex-col mx-6 w-full justify-center text-center'>
                        <h1 className="text-6xl mb-2 font-bold text-white my-2">User List</h1>
                        <div className='flex w-full justify-center max-[600px]:flex-col'>
                            <div className='flex w-[90%] justify-center ml-[15%] max-[600px]:ml-0 max-[600px]:w-full my-2'>
                            <p className="text-3xl mb-2 font-normal">Exact your discord privileges</p>
                            </div>
                            <div className="flex items-center justify-center my-2">
                            <div className="relative">
                                <input 
                                    type="text" 
                                    id="searchUser" 
                                    name="searchUser" 
                                    value={searchValue}
                                    onChange={handleSearchChange}
                                    className={`indent-2 rounded-lg border py-2.5 focus:outline-none bg-[#96B1DC] focus:border-neutral-200 focus:border-b-2 transition-colors peer ${isSearchFocused || searchValue ? 'focused' : ''}`}
                                    autoComplete="off"
                                    onFocus={() => setIsSearchFocused(true)}
                                    onBlur={() => setIsSearchFocused(false)}
                                />
                                <label
                                    htmlFor="searchUser"
                                    className={`absolute top-2.5 left-2 cursor-text transition-all transform ${isSearchFocused || searchValue ? '-translate-y-[1.25rem] text-sm bg-[#96B1DC]' : ''}`} 
                                >
                                    Search
                                </label>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='rounded-lg border py-3 w-1/4 max-[1240px]:w-1/2 max-[600px]:w-3/4 max-[320px]:w-[95%] bg-[#5D75B1] hover:bg-[#56699A] hover:border-neutral-200 transition duration-300 ease-in-out mb-8 flex justify-center'>
                    <button className='text-4xl w-full h-full' onClick={() => setIsInsertModalOpen(true)}>
                        Create User
                    </button>
                </div>
                <div className='flex flex-wrap flex-grow w-full h-full justify-center '>
                {noMatch && <p className='max-[320px]:text-2xl text-3xl '>No users match your search</p>}
                    {filteredUsers.map((user) => (
                        <div key={user.userID} className='border-2 flex flex-col justify-center text-center items-center w-[300px] h-[200px] m-4 cursor-pointer bg-[#5D75B1] hover:bg-[#56699A] hover:border-neutral-200 transition duration-300 ease-in-out' id={`userBox${user.userID}`} onClick={() => handleUserClick(user)}>
                            <h1 className='text-3xl font-medium my-4'>{user.username}</h1>
                            <h1 className='text-3xl font-medium my-4'>{getUserRole(user.roleID)}</h1>
                            <DeleteCertainUser userID={user.userID} username={user.username} onDelete={() => handleDeleteUser(user.userID, user.username)} />
                        </div>
                    ))}
                </div>
            </div>
            <Overlay isOpen={isEditModalOpen || isInsertModalOpen} onClose={handleCloseModal} />
            {selectedUser && (
                <EditUserInfo user={selectedUser} onClose={handleCloseModal} />
            )}
            {isInsertModalOpen && (
                <CreateNewUser onClose={handleCloseModal} onUserInserted={handleUserInserted} />
            )}
        </div>
        </>
    );
}


export default UserActionPage;