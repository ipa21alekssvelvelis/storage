import React, { useState, useEffect } from 'react';

function EditUserInfo({ user, onClose }) {

    const [roleList, setRoleList] = useState([]);

    const [errors, setErrors] = useState({});
    const [submissionStatus, setSubmissionStatus] = useState('');

    useEffect(() => {
        fetch('http://localhost:8888/storage/utilities/getRoles.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(response => {
            setRoleList(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    const [editedUser, setEditedUser] = useState({ ...user });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
        console.log(editedUser);
    };

    const handleCloseButton = () => {
        onClose();
    };

    const [newPassword, setNewPassword] = useState('');

    const handleChangeNewPassword = (event) => {
        const { value } = event.target;
        setNewPassword(value);
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
    
        const newErrors = {};
        const trimmedUsername = editedUser.username.trim();
        const trimmedPassword = newPassword.trim();
    
        if (!trimmedUsername) {
          newErrors.username = 'Username is required.';
        } else if (trimmedUsername.length > 30) {
          newErrors.username = 'Username must be 30 characters or less.';
        } else if (trimmedUsername.length < 4) {
            newErrors.username = 'Username must be atleast 4 characters';
        } else if (trimmedUsername.match(/[!£$%^&*()+\[\]{};':"\\|,<>\/?]/)){
            newErrors.username = 'Username cannot contain symbols';
        }
    
        if (!trimmedPassword) {
          newErrors.password = 'Password is required.';
        } else if (trimmedPassword.length < 8) {
          newErrors.password = 'Password must be 8 characters or more.';
        }
    
        if (Object.keys(newErrors).length === 0) {
          setErrors({});
          try {
            const response = await fetch('http://localhost:8888/storage/utilities/updateUser.php', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ userID: editedUser.userID, username: trimmedUsername, password: trimmedPassword, role: editedUser.roleID}),
            });
    
            if (response.ok) {
              const data = await response.json();
              if (data.error) {
                // console.error('Error:', data.error);
                if(data.error === 'Username taken'){
                    newErrors.username = data.error;
                    setErrors(newErrors);
                }
              } else {
                setSubmissionStatus('Updated user');
                console.log(data);
              }
            } else {
              console.error('Submission failed');
            }
          } catch (error) {
            console.error('Error:', error);
          }
        } else {
          setErrors(newErrors);
          setSubmissionStatus('');
        }
      };

    return (
    <div className='w-2/5 min-w-[310px] min-h-[400px] border-2 shadow-lg shadow-white rounded-lg border-neutral-600 flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-neutral-100'>
        <form onSubmit={handleSubmitForm} className='flex w-full h-full flex-col text-black dark:text-white'>
            <div className='absolute bg-neutral-600 top-0 right-0 w-8 h-8 my-4 mx-4 rounded-full cursor-pointer text-center dark:text-black' onClick={handleCloseButton}>
                <p className='flex items-center justify-center h-full text-white'>X</p>
           </div>
            <div className='flex flex-col my-4 mx-4'>   
                <h1 className='text-3xl'>Edit your task</h1>
                <p className='text-2xl font-light'>Input your edits here:</p>
            </div>
            <div className='flex flex-col align-center h-full'>
                <div className='flex flex-col mx-4 my-4'>
                    <label className='text-xl mb-4'>
                        Username:
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={editedUser.username}
                        onChange={handleChange}
                        className="indent-2 text-lg rounded-sm border-b-2"
                    />
                    {errors.username && <p className="text-red-500 my-2">{errors.username}</p>}
                </div>
                <div className='flex flex-col mx-4 my-4'>
                    <label className='text-xl mb-4'>
                    New Password:
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={newPassword}
                        onChange={handleChangeNewPassword}
                        className="indent-2 text-lg rounded-sm border-b-2"
                    />
                    {errors.password && <p className="text-red-500 my-2">{errors.password}</p>}
                </div>
                <div className='flex flex-col mx-4 my-4'>
                    <label className='text-xl mb-4'>
                    Role:
                    </label>
                    <select
                    name="role"
                    id="role"
                    value={editedUser.roleID}
                    onChange={handleChange}
                    className="indent-2 text-lg rounded-sm border-b-2"
                    >
                    {roleList.map((role) => (
                        <option key={role.roleID} value={role.roleID}>
                        {role.role}
                        </option>
                    ))}
                    </select>
                </div>
                <div className='text-center'>
                <button type='submit' className="text-lg mb-4">
                    Save Changes
                </button>
                {submissionStatus && <p className="text-green-500 my-2">{submissionStatus}</p>}
                </div>
            </div>
        </form>
    </div>
    );
}

export default EditUserInfo;
