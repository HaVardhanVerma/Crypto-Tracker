import React from 'react'
import Button from '../../../Common/Button/Button';
import gradient from '../../../assets/gradient.png'
import iphone from '../../../assets/iphone.png'
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import './Main.css';
import Footer from '../../Footer/Footer';

function Main() {
  return (
    <div className='flex-info'>
        
        <div className='left-component'>
            <motion.h1 className='track-info-heading'
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}
            >
                Track Crypto
            </motion.h1>
            <motion.h1 className='real-time-heading'
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1, delay: 0.5}}
            >
                Real Time.
            </motion.h1>

            <motion.p className='info-text'
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1, delay: 1}}
            >
                Track crypto through a public API in real time. Visit The Dashboard to do so!
            </motion.p>
    
            <motion.div className='btn-flex'
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1, delay: 1.5}} 
            >   
                <Link to="/dashboard">
                    <Button Text={"Dashbord"} outLine={false} onClick={() => console.log("Clicked")}/>
                </Link>
            </motion.div>

        </div>

        <div className='right-component'>
            <div className='phone-container'>
                <img src={gradient} className='gradient'/>
                <motion.img src={iphone} className='iphone'
                    initial={{y: -10}}
                    animate={{y: 10}}
                    transition={{
                        type: "smooth",
                        repeatType: "mirror",
                        duration: 2,
                        repeat: Infinity
                    }}
                />
            </div>
        </div>
    </div>
  )
}

export default Main
