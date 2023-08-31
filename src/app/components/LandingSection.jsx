"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@mui/material'
import {colour} from '../theme/CustomPallet'


export default function LandingSection() {

    
  return (
    <div className='LandingSection'>

       <div className='LandingSection-content'>
            <div style={{fontSize:'3.5em' , fontWeight:900 }}>
                Boost Your Social  Media presence today
            </div>
            <div style={{fontSize:15 , fontWeight:200 }}>
                We offer a range of social meadia marketing services to help you grow your online presence
                We offer a range of social meadia marketing services to help you grow your online presence
            </div>

            <div className='LandingSection-buttons' style={{display:'flex',gap:25,marginTop:15}} >
                <Button variant="contained">Get Started</Button>
                <Button variant="contained" sx={{backgroundColor:colour.lightAccent}} >Learn More</Button>
            </div>
       </div>

       <div className='LandingSection-image'>
            <img src="/LandingImage.png" width='100%' height ='100%' />
        </div>

       
    </div>
  )
}
