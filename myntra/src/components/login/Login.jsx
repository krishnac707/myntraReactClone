import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Auth.context';

const Login = () => {

    const [userdata, setuserdata] = useState({ email: "", password: "" });
  const { state, login } = useContext(AuthContext);
  console.log(state);
  const router = useNavigate();


  const formValue = (event) => {
    setuserdata({ ...userdata, [event.target.name]: event.target.value });
  }

  const formSubmit = (event) => {
    event.preventDefault();
    if (userdata.email && userdata.password) {
      const users = JSON.parse(localStorage.getItem("Users"));
      var flag = false
      for (var i = 0; i < users?.length; i++) {
        if (users[i].email == userdata.email && users[i].password == userdata.password) {
          flag = true
          login(users[i]);
          toast.success("login successfull");
          router('/');
          setuserdata({ email: "", password: "" })
        //   setLoginButton(false)
          break;
        }
      }

      if (flag == false) {
        toast.error("Your email or password is incorrect");
      }
    }
    else {
      toast.error("Please fill all details");
    }
  }

    return (
        <div className='register-body'>
            <div className="loginpage">
                <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/c2be095d-a4fb-4981-bdad-9d69ea189da31675792659902-offer-banner-500-600x240-code-_-MYNTRA200.jpg"
                    className="register-imageSize" alt="" />
                <div className="loginId">
                    <p className="loginMargin"><span className="loginSize">lOGIN</span></p>
                    <form onSubmit={formSubmit}>
                        <input type="email" className='inputCss' name='email' onChange={formValue} placeholder='Enter Email' />
                        <input type="password" className='inputCss' name='password' onChange={formValue} placeholder='Enter Password' />
                        <input type='submit' className="buttonCss buttonMargin" value='CONTINUE' />
                    </form>
                    <p className="terms loginMargin">If you Don't have Account then <span className="spanColor" onClick={() => router('/register')}><b>Sign up from here</b></span></p>
                </div>
            </div>
        </div>
    )
}

export default Login
