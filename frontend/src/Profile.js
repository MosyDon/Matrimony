import logo from './logo.svg'
import logout from './logout.png'
import './style.css'
import photo from './photo.webp'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function Profile(){
 
    localStorage.getItem('id')
    let newid1=localStorage.getItem('id');

    const [array0, setArray0] = useState([]);

    useEffect(() => {
        let url = "http://localhost:4000/fetchandcopyprofile"
        let request = {id:newid1};
        let header={};
        axios
            .post(url,request,header)
            .then((res) => {
                console.log(res.data)
                setArray0(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])
    
    
    
    return(
        <div className="container">
            <div className="header">
                <img className='logo' src={logo}/> 
                <label>MY HOME</label> 
                <label>SEARCH</label>
                <label>MATCHES</label>
                <label>MAILBOX</label>
                <label>UPGRADE NOW</label>
                <img className='logout' src={logout}/>
            </div>

            {array0.map((item,index) => {
                return<>
                    <div className='bigbox2_inner1' >
                    <div >
                        <img src={photo}/></div>
                    <div className='bigbox2_inner1_wordbox'>
                        <div className='bigbox2_inner1_row1'>
                            <label>{item.txtUserName}</label>
                            <label className='label1'>E5939741 | Profile created by Self | Active - 1 week ago</label>
                            <label className='label2'>Verified</label>
                        </div>
                        <div className='bigbox2_inner1_row2'>
                            <label>*26 years, 5' 5"</label>
                            <label className='label1'>{item.txtEducation}</label>
                        </div>
                        <div className='bigbox2_inner1_row3'>
                            <label>*Mumbai</label>
                            <label className='label1'>Doctor</label>
                        </div>
                        <div className='bigbox2_inner1_row4'>
                            <label>{item.txtReligion}, {item.txtCaste}</label>
                            <label className='label1'>*0-1 lakh</label>
                        </div>
                        <div className='bigbox2_inner1_row5'>
                            <label>*Hindi, {item.txtStatename}</label>
                            <label className='label1'>*Never Married</label>
                        </div>
                    </div>
            </div>
                </>
            })}
            {/* <div className='bigbox2_inner1' >
                    <div >
                        <img src={photo}/></div>
                    <div className='bigbox2_inner1_wordbox'>
                        <div className='bigbox2_inner1_row1'>
                            <label>Aswathy AB</label>
                            <label className='label1'>E5939741 | Profile created by Self | Active - 1 week ago</label>
                            <label className='label2'>Verified</label>
                        </div>
                        <div className='bigbox2_inner1_row2'>
                            <label>*26 years, 5' 5"</label>
                            <label className='label1'>*BHMS</label>
                        </div>
                        <div className='bigbox2_inner1_row3'>
                            <label>*Mumbai</label>
                            <label className='label1'>Doctor</label>
                        </div>
                        <div className='bigbox2_inner1_row4'>
                            <label>*Hindu, Brahmin Bhumihar</label>
                            <label className='label1'>*0-1 lakh</label>
                        </div>
                        <div className='bigbox2_inner1_row5'>
                            <label>*Hindi-UP/UK</label>
                            <label className='label1'>*Never Married</label>
                        </div>
                    </div>
            </div> */}
            <div className='abouther'>
                <label className='Abouther'>About Her</label>
                <label className='label3'>I belong to a middle class family with moderate values</label>
                <label className='label4'>27 years and 9 months, 4'7"</label>
            </div>
        </div>




    )
}