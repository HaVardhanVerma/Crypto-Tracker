import React from 'react'
import './Topbtn.css';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

function Topbtn() {

    let myButton = document.getElementById('myBtn');

    window.onscroll = function () {
        scrollFunction();
    }

    function scrollFunction() {
        if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            myButton.style.display = "flex";
        }

        else {
            myButton.style.display = "none";
        }
    }

    const goOnTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div className='top-btn' id='myBtn' onClick={(e) => goOnTop()}>
            <ArrowUpwardRoundedIcon style={{color: "var(--blue"}}/>
        </div>
    )
}

export default Topbtn
