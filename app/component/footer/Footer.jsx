import React from 'react'
import style from '@/app/component/footer/footer.module.css'
import { Typography, Grid, Button } from "@mui/material"
const Footer = () => {
  return (
    <Grid container  className={style.container}>
      <Grid item spacing={5} md= {12} sm={6}
       sx={3} style={{
        display: "flex",

        justifyContent: "space-between",
        alignItems: "center",
        gap: 5,

        padding: 30,
        textAlign: "center",
        marginTop: 20,

      }} >
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",


        }}>
          <Typography variant='h4' fontWeight={800} color="white"> Our Service</Typography>
          <Button fontWeight={500} style={{
            color: "#fff",
            fontSize: 15,

          }} >ServiceShopping</Button>
          <Button variant='h2' fontWeight={700} style={{
            color: "#fff",
            fontSize: 15,

          }} >Moblie</Button>



        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",


        }}>
          <Typography variant='h4' fontWeight={600} color="white">Contact Us</Typography>
          <Button variant='h2' fontWeight={700} style={{
            color: "#fff",
            fontSize: 15,

          }} >Hotline 24/7</Button>
          <Button variant='h2' fontWeight={700} style={{
            color: "#fff",
            fontSize: 15,

          }} >07037983613</Button>



        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",


        }}>
          <Typography variant='h4' fontWeight={600} color="white">Quick Links</Typography>
          <Button variant='h2' fontWeight={700} style={{
            color: "#fff",
            fontSize: 15,

          }} >About us</Button>
          <Button variant='h2' fontWeight={700} style={{
            color: "#fff",
            fontSize: 15,

          }} >Help</Button>
          <Button variant='h2' fontWeight={700} style={{
            color: "#fff",
            fontSize: 15,

          }} >Contact</Button>
        </div>

        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "#fff",


        }}>
          <Typography variant='h4' fontWeight={500} color="white">Popular Service</Typography>

          <Button variant='h2' fontWeight={700} style={{
            color: "#fff",
            fontSize: 20,

          }}>Creating Account</Button>
          <Button variant='h2' fontWeight={700} style={{
            color: "#fff",
            fontSize: 15,

          }}>Dry Food</Button>
          <Button variant='h2' fontWeight={700} style={{
            color: "#fff",
            fontSize: 15,

          }}> Sign in</Button>
          <Button variant='h2' fontWeight={700} style={{
            color: "#fff",
            fontSize: 15,

          }} >All Levels</Button>






        </div>





      </Grid>

      {/* <div className={style.foottitle}>
        <div>
          <Typography variant='h5'>Our Service</Typography>
         
          <li>Our ServiceShopping And Delivery</li>
          <li>Moblie</li>
        </div>
        <div>
          <h1>
            Contact Us
          </h1>
          <li>Hotline 24/7</li>
          <li>07037983613</li>
        </div>
       

         
      </div>
      <div className={style.footlogo}>
        <div>
          <h1>Quick Links</h1>
          <li>About us</li>
          <li>Help</li>
          <li>Contact</li>
        </div>
        <div>
          <h1>Popular Service</h1>
          <li>Creating Account</li>
          <li>Dry Food</li>
          <li>Sign in </li>
          <li>All Levels</li>
        </div>
        <div></div>
        


      </div> */}

    </Grid>
  )
}

export default Footer
