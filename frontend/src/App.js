import './style.css';
import sitelogo from './logo.svg'
import footer1 from './footer1.webp'
import footer2 from './footer2.webp'
import footer3 from './footer3.webp'
import footer4 from './footer4.webp'
import footer5 from './footer5.webp'
import background from './middlebackground.webp'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Signup from './Signup.js';
export default function App() {
    const [option, setOption] = useState("");
    const [name, setUsername] = useState("");
    const [mobile, setMobile] = useState("");
    const navigate = useNavigate();
    const LoginClick = () => {
        setShow(true)
    }

    const RegisterClick = () => {
       
        const url="http://localhost:4000/insert";
        const request={option:option, name:name};
        const header={};
        axios.post(url, request, header)
    .then((res)=>{
    console.log((res.data.insertId))
    localStorage.setItem('id', res.data.insertId)
    })
    .catch((err)=>{
    console.log("Error==> "+err)

    })
    navigate('/Register')
        }
    const Changefor = (e) => { setOption(e.target.value) }
    const Changename = (e) => { setUsername(e.target.value) }
    const Changemobile = (e) => { setMobile(e.target.value) }
    const [show, setShow] = useState(false);

    return (
    <>
        <Signup show={show} LoginClick = {LoginClick} setShow = {setShow}/>

        <div className='App_container'>
            <div className='App_Header'>
                <div className='App_container_left'>
                    <div className='App_container_left_img'>
                        <img src={sitelogo} />
                    </div>
                    <div className='App_container_left_para'>
                        <label className='label1'>Christian Matrimony.com</label>
                        <label className='label2'>From Matrimony.com group</label>
                    </div>
                </div>
                <div className='App_container_right'>
                    <label>Already a member?</label>
                    <button onClick={LoginClick}>Log in</button>
                </div>
            </div>
            <div className='middle_outer'  style={{ backgroundImage: `url(${background})`}}>
                <div className='middle'
                   
                >
                    <div className='middle_innerbox'>
                        <div className='middle_innerbox_row1'>
                            <label>No. 1 and official matrimony service exclusively for Christians</label>
                        </div>
                        <div className='middle_innerbox_row2'>
                            <label>Meet your Christian soulmate here!</label>
                        </div>
                        <div className='middle_innerbox_row3'>
                            <div className='middle_innerbox_row3_col1'>
                                <label>Matrimoney Profile for {option} </label>
                                <select onChange={(e) => { Changefor(e) }}><option>SELECT</option>
                                    <option>Self</option>
                                    <option>Relative</option>
                                    <option>Friend</option>
                                </select>
                            </div>
                            <div className='middle_innerbox_row3_col2'>
                                <label>Name </label>
                                <input type="text" placeholder='Name' value={name} onChange={(e) => { Changename(e) }} />
                            </div>
                            <div className='middle_innerbox_row3_col3'>
                                <label>Mobile Number</label>
                                <input type="number" placeholder='Mobile Number' value={mobile} onChange={(e) => { Changemobile(e) }} />
                            </div>
                            <div className='middle_innerbox_row3_col4'>
                                <button onClick={(e) => { RegisterClick(e) }}>Register Free</button>
                            </div>

                        </div>
                        <div className='middle_innerbox_row4'>
                            <label></label>
                        </div>
                    </div>
                </div></div>
            <div className='footer'>
                <div className='footer_col'>
                    <img src={footer1} />
                    <label>10+ years of service in helping Christians cherish the meaning of Happy marriage</label></div>
                <div className='footer_col'>
                    <img src={footer2} />
                    <label>2 Lakh+ people have found their life partner using our services</label></div>
                <div className='footer_col'>
                    <img src={footer3} />
                    <label>2020's winner of 'India's Growth Champions Award' by The Economic Times</label></div>
                <div className='footer_col'>
                    <img src={footer4} />
                    <label>1 Lakh+ genuine profiles with 100% verified phone numbers</label></div>
                <div className='footer_col'>
                    <img src={footer5} />
                    <label>130+ branches across India to serve you better</label></div>

            </div></div></>



    );




}