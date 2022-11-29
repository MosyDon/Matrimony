import './style.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Signup({show, LoginClick, setShow}) {
    console.log(show);
    function close() {
        setShow(false);
    }

    const navigate = useNavigate();
    const LOGINClick = () => {
        const url = "http://localhost:4000/validate";
        const request = { matrimony: matrimony, password: password };
        const header = {};
        axios.post(url, request, header)
            .then((res) => {
                if(res.data.length != 0){
                    console.log((res.data))
                    navigate('/Home')
                }

                else{
                    alert("error")
                }
            })
            .catch((err) => {
                console.log("Error==> " + err)
            })
        
    }

    const [matrimony, setMatrimony] = useState("");
    const [password, setPassword] = useState("");
    const Changematrimony = (e) => { setMatrimony(e.target.value) }
    const Changepassword = (e) => { setPassword(e.target.value) }

    return show?(
        <>
        <div className='signup_outer'>
            <div className="signup_container">
                <div className='signup_container_row1'>
                    <label>Login</label>
                    <button onClick={close}>X</button>
                </div>
                <div className='signup_container_row2'>
                    <label>Matrimony Id/Mobile No./E-mail </label>
                    <input type="text" placeholder="Matrimony Id/Mobile No./E-mail" value={matrimony} onChange={(e) => { Changematrimony(e) }} />
                </div>
                <div className='signup_container_row3'>
                    <label>Password </label>
                    <input type="password" placeholder='Password' value={password} onChange={(e) => { Changepassword(e) }} />
                </div>
                <div className='signup_container_row4'>
                    <input type="checkbox" />
                    <label>Keep me logged in</label>
                </div>
                <div className='signup_container_row5'>
                    <button onClick={(e) => { LOGINClick(e) }}>LOGIN</button>
                </div>
                <div className='signup_container_row6'>
                    <label>Forgot Password? | Login Via OTP</label>
                </div>
            </div>
        </div>








        </>):
    (
    <></>
    );
}