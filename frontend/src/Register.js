import './style.css'
import sitelogo from './logo.svg'
import img from './registericon.webp'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function Register() {


    const [array1, setArray1] = useState([]);
    const [array2, setArray2] = useState([]);
    const [array3, setArray3] = useState([]);
    const [dob, setDob] = useState("");
    const [deno, setDeno] = useState("");
    const [div, setDiv] = useState("");
    const [caste, setCaste] = useState("");
    const [mt, setMt] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    localStorage.getItem('id')
    let newid=localStorage.getItem('id');

    const ContinueClick = () => {
        
        const url = "http://localhost:4000/updateregister";
        const request = {  id:newid, dob: dob, deno: deno, div: div, caste: div, mt: mt, email: email, password: password };
        console.log(request);
        const header = {};
        axios.post(url, request, header)
            .then((res) => {
                console.log("success"+res.data)
                
            })
            .catch((err) => {
                console.log(err)
            })
        console.log("Test2");
        navigate('/Login');

    }
    

    useEffect(()=>{
        let url="http://localhost:4000/selectdeno";
        let request = {};
        let header={};
        axios.post(url, request, header)
           .then((res) =>{
                console.log(res.data)
                setArray1(res.data)
           })
           .catch((err) =>{
                console.log(err)
           })

    },[])

    const DenoClick = (id) => {
        console.log(id);
        let url="http://localhost:4000/displaydivfromdeno";
        let request = {id:id};
        let header={};
        axios.post(url, request, header)
           .then((res) =>{
                console.log(res.data)
                setArray2(res.data)
           })
           .catch((err) =>{
                console.log(err)
           })
    }

    useEffect(()=>{
        let url="http://localhost:4000/selectmt";
        let request = {};
        let header={};
        axios.post(url, request, header)
           .then((res) =>{
                console.log(res.data)
                setArray3(res.data)
           })
           .catch((err) =>{
                console.log(err)
           })

    },[])

    const Changedob = (e) => { setDob(e.target.value) }
    const Changedeno = (e) => { 
        console.log("Changedeno",e);
        setDeno(e.target.value) }
    const Changediv = (e) => { 
        console.log("Changediv",e);
        setDiv(e.target.value) }
    const Changecaste = (e) => { setCaste(e.target.value) }
    const Changemt = (e) => { setMt(e.target.value) }
    const Changeemail = (e) => { setEmail(e.target.value) }
    const Changepassword = (e) => { setPassword(e.target.value) }

    return (


        <div>
            <div className='Register_Header'>
                <div className='Register_container_left'>
                    <div className='Register_container_left_img'>
                        <img src={sitelogo} />
                    </div>
                    <div className='Register_container_left_para'>
                        <label className='label1'>Christian Matrimony.com</label>
                        <label className='label2'>From Matrimony.com group</label>
                    </div>
                </div>
            </div>
            <div className='Register_container_row2'>
                <label className='label1'>Great! You have completed </label>
                <label className='label2'>20%</label>
            </div>
            <div className='Register_container_row3'>
                <div className='img'><img src={img} />
                    <label className='label1'>Trusted by Christians across the world!</label>
                </div>
                <div className='details'>
                    <div className='details_heading'>
                        <label>Please provide us with your basic details</label>
                    </div>
                    <div className='details_dob'>
                        <label>Date of birth</label>
                        <input type="text" value={dob} onChange={(e) => { Changedob(e) }} />
                    </div>
                    <div className='details_deno'>
                        <label>Denomination</label>
                        <select onClick={(e) => {DenoClick(e.target.value)}} onChange={(e) => {Changedeno(e)}}>
                            <option>SELECT</option>
                            {array1.map((item,index) => {
                                return<>
                                <option value = {item.id} >{item.txtReligion}</option>     
                                    
                                </>
                            })};

                        </select>
                    </div>
                    <div className='details_div'>
                        <label>Division</label>
                        <select value={div} onChange={(e) => { Changediv(e) }}>
                            <option>SELECT</option>
                            {array2.map((item,index) => {
                                return<>
                                <option value = {item.id} >{item.txtCaste}</option>     
                                    
                                </>
                            })};

                        </select>
                    </div>
                    <div className='details_sub'>
                        <label>Subcaste (optional)</label>
                        <input type="text" value={caste} onChange={(e) => { Changecaste(e) }} />
                    </div>
                    <div className='details_mothertongue'>
                        <label>Mother tongue</label>
                        <select onChange={(e) => {Changemt(e)}}>
                            <option>SELECT</option>
                            {array3.map((item,index) => {
                                return<>
                                <option value = {item.id} >{item.txtmothertongue}</option>     
                                    
                                </>
                            })};

                        </select>
                    </div>
                    <div className='details_email'>
                        <label>Email id</label>
                        <input type="text" value={email} onChange={(e) => { Changeemail(e) }} />
                    </div>
                    <div className='details_password'>
                        <label>Password</label>
                        <input type="text" value={password} onChange={(e) => { Changepassword(e) }} />
                    </div>
                    <div className='details_continue'>
                        <button onClick={(e) => {ContinueClick(e)}}>CONTINUE</button>
                    </div>
                </div>

            </div>
            <div className='details_rights'>
                <label>Copyright © 2022. All rights reserved.</label>
            </div>


        </div>




    );
}