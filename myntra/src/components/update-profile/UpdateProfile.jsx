import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/Auth.context';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {

    const { login } = useContext(AuthContext);
    const [userData, setUserData] = useState({});
    const router = useNavigate();

    const handlingForm = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("CurrentUser"))
        if (!currentUser) {
            router('/login')
        }
        const allUser = JSON.parse(localStorage.getItem("Users"))
        for (var i = 0; i < allUser.length; i++) {
            if(allUser[i].email == currentUser.email && allUser[i].password == currentUser.password){
                setUserData(allUser[i])
            }
        }
    },[])

    const formValidation =() => {
        const currentUser = JSON.parse(localStorage.getItem("CurrentUser"))
        const allUser = JSON.parse(localStorage.getItem("Users"))
        for (var i = 0; i < allUser.length; i++) {
            if(allUser[i].email == currentUser.email && allUser[i].password == currentUser.password){
                allUser[i].name = userData.name;
                allUser[i].password = userData.password;
                currentUser.name= userData.name;
                currentUser.password = userData.password; 
            }
        }
        login(currentUser)
        localStorage.setItem("Users",JSON.stringify(allUser));
        localStorage.setItem("Currentuser",JSON.stringify(currentUser));
        setUserData({});
        toast.success("profile updated");
        router('/');
    }


  return (
    <div className='register-body'>
            <div className="loginpage">
                <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/c2be095d-a4fb-4981-bdad-9d69ea189da31675792659902-offer-banner-500-600x240-code-_-MYNTRA200.jpg"
                    className="register-imageSize" alt="" />
                <div className="loginId">
                    <p className="loginMargin"><span className="loginSize">Update Profile</span></p>
                    <form onSubmit={formValidation}>
                        <input type="text" className="inputCss" value={userData.name} name='name' onChange={handlingForm} placeholder="Enter Name" />
                        <input type="text" className="inputCss" value={userData.password} name='password' onChange={handlingForm} placeholder="Enter password" />
                        <input type='submit' className="buttonCss buttonMargin" value='UPDATE PROFILE' />
                    </form>
                </div>
            </div>
        </div>
  )
}

export default UpdateProfile