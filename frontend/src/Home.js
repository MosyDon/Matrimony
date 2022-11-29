import homelogo from './logo.svg'
import photo from './photo.webp'
import logout from './logout.png'
import './style.css'
import homepagebanner from './homepagebanner.jpg'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const navigate = useNavigate();
    
    const handleClick = (id) => {
        localStorage.setItem('id',id)
        console.log(id);
        navigate('/Profile')
    }    
    
    
    const [array, setArray] = useState([]);
    useEffect(() => {
        let url = "http://localhost:4000/fetchandmakeprofile";
        let request = {};
        let header = {};
        axios.post(url, request, header)
            .then((res) => {
                console.log(res.data)
                setArray(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])
    
    
    return (
        <div>
            <div className="bigbox1" style={{ backgroundImage: `url(${homepagebanner})` }}>
                <div className="bigbox1_header">
                    <div className='bigbox1_header_inner1'>
                        <img src={homelogo} />
                    </div>
                    <div className='bigbox1_header_inner2'>
                        <label>MY HOME</label>
                    </div>
                    <div className='bigbox1_header_inner3'>
                        <label>SEARCH</label>
                    </div>
                    <div className='bigbox1_header_inner4'>
                        <label>MATCHES</label>
                    </div>
                    <div className='bigbox1_header_inner5'>
                        <label>MAILBOX</label>
                    </div>
                    <div className='bigbox1_header_inner6'>
                        <label>UPGRADE NOW</label>
                    </div>
                    <div className='bigbox1_header_inner7'>
                        <img src={logout} />
                        <div class="logout-dropdown">
                            <a href="#">Logout</a>
                        </div>
                    </div>
                </div>
                <div className='bigbox1_searchbox'>
                    <input type="text" />
                    <button>SEARCH</button>

                </div>



            </div>

            {array.map((item, index) => {
                return <>
                    <div className='bigbox2' onClick={(e) => {handleClick(item.id)} }>
                        <div className='bigbox2_inner1' >
                            <div >
                                <img src={photo} /></div>
                            <div className='bigbox2_inner1_wordbox'>
                                <div className='bigbox2_inner1_row1'>
                                    <label>{item.txtUserName}</label>
                                </div>
                                <div className='bigbox2_inner1_row2'>
                                    <label>26 years, 5' 5"</label>
                                    <label className='label1'>{item.txtEducation}</label>
                                </div>
                                <div className='bigbox2_inner1_row3'>
                                    <label>{item.txtStatename}</label>
                                    <label className='label1'>Doctor</label>
                                </div>
                                <div className='bigbox2_inner1_row4'>
                                    <label>{item.txtReligion}, {item.txtCaste}</label>
                                    <label className='label1'>0-1 lakh</label>
                                </div>
                                <div className='bigbox2_inner1_row5'>
                                    <label>Hindi-UP/UK</label>
                                    <label className='label1'>Never Married</label>
                                </div>
                            </div>
                        </div>



                    </div>

                </>
            })};

        </div>




    )
}