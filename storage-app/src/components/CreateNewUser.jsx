import React, { useState, useEffect } from 'react';

function CreateNewUser({ onCreateUser, onClose, onUserInserted }) {

    const [errors, setErrors] = useState({});
    const [submissionStatus, setSubmissionStatus] = useState('');

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmpassword: '',
        role: '2',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    

    const handleCloseButton = () => {
        onClose();
    };

    const handleUserSubmit = async (e) => {
        e.preventDefault();
        
        const newErrors = {};
        const trimmedUsername = formData.username.trim();
        const trimmedPassword = formData.password.trim();
        const trimmedConfirm = formData.confirmpassword.trim();
    
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

        if (!trimmedConfirm) {
            newErrors.confirmpassword = 'Confirmed password is required.';
        } else if (trimmedConfirm.length < 8) {
            newErrors.confirmpassword = 'Confirmed password must be 8 characters or more.';
        } else if (trimmedConfirm !== trimmedPassword) {
            newErrors.match = 'Passwords do not match.';
        }
          
        if (Object.keys(newErrors).length === 0) {
            setErrors({});
            try {
                const response = await fetch('http://localhost:8888/storage/utilities/insertUser.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: formData.username.trim(),
                        password: formData.password.trim(),
                        role: formData.role,
                    }),
                });
        
                if (response.ok) {
                    const data = await response.json();
                    if (data.error) {
                        if(data.error === 'Username taken'){
                            newErrors.username = data.error;
                            setErrors(newErrors);
                        }
                    } else {
                        setSubmissionStatus('Inserted user');
                        onUserInserted();
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
        <form onSubmit={handleUserSubmit} className='flex w-full h-full flex-col text-black dark:text-white'>
            <div className='absolute bg-neutral-600 top-0 right-0 w-8 h-8 my-4 mx-4 rounded-full cursor-pointer text-center dark:text-black' onClick={handleCloseButton}>
                <p className='flex items-center justify-center h-full text-white'>X</p>
           </div>
            <div className='flex flex-col my-4 mx-4'>   
                <h1 className='text-3xl'>Add user</h1>
                <p className='text-2xl font-light'>Add all relevant details here:</p>
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
                        value={formData.username}
                        onChange={handleChange}
                        className="indent-2 text-lg rounded-sm border-b-2"
                    />
                    {errors.username && <p className="text-red-500 my-2">{errors.username}</p>}
                </div>
                <div className='flex flex-col mx-4 my-4'>
                    <label className='text-xl mb-4'>
                    Password:
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="indent-2 text-lg rounded-sm border-b-2"
                    />
                    {errors.password && <p className="text-red-500 my-2">{errors.password}</p>}
                </div>
                <div className='flex flex-col mx-4 my-4'>
                    <label className='text-xl mb-4'>
                    Confirm password:
                    </label>
                    <input
                        type="password"
                        name="confirmpassword"
                        id="confirmpassword"
                        value={formData.confirmpassword}
                        onChange={handleChange}
                        className="indent-2 text-lg rounded-sm border-b-2"
                    />
                    {errors.confirmpassword && <p className="text-red-500 my-2">{errors.confirmpassword}</p>}
                    {errors.match && <p className="text-red-500 my-2">{errors.match}</p>}
                </div>
                <div className='flex flex-col mx-4 my-4'>
                    <label className='text-xl mb-4'>
                    Role:
                    </label>
                    <select
                    name="role"
                    id="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="indent-2 text-lg rounded-sm border-b-2"
                    >
                    <option value="2">Noliktava</option>
                    <option value="3">Plaukti</option>
                    </select>
                </div>
                <div className='text-center'>
                <button type='submit' className="text-lg mb-4">
                    Insert user
                </button>
                {submissionStatus && <p className="text-green-500 my-2">{submissionStatus}</p>}
                </div>
            </div>
        </form>
    </div>
    );
}

export default CreateNewUser;
