import Image from 'next/image'
import style from '@/app/homepage.module.css'
import Navigation from '@/app/component/Navigation/page'
import { Button, Card, Grid, Typography } from '@mui/material'
import { Girl } from '@mui/icons-material'


export default function Home() {
  return (
    <Grid container >
      <div className={style.textcontainer}>
        <Typography variant='h1' fontWeight='600' color='white' style={{
          padding: "25",
          margin: "20"

        }} >Creative Thoughts Agency. </Typography>
        <Typography variant='h4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimos cum dolores delectus qui reiciendis autem id unde mollitia eius et, dolorem exercitationem hic distinctio quia vitae saepe veniam! Non!</Typography>

        <div>
          <Button>Learn</Button>
          <Button>Create</Button>
         
          
        </div>


      

      </div>
      <div className={style.imgcontainer}>
        <Image src='/bg1.png' alt="" fill
        />
        


      </div>
      <Grid container>
        <Grid item>
          <Typography>ghgjg</Typography>
          <Grid>
            <Image src="/public/bugger.jpg" fill alt='hbmn ' />
            <Typography fontWeight={400} style={{
              textAlign: "center",
              fontWeight: "500"
            }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod deserunt voluptatum corrupti modi quaerat unde necessitatibus, optio tempore sint cumque earum iure totam nobis harum, commodi illo quisquam fuga maxime. Iusto rerum blanditiis aliquam beatae dolorum placeat laudantium dignissimos exercitationem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa, sit praesentium dolor harum eum porro excepturi? In, quae possimus? Maiores laboriosam culpa sed molestias? Ullam tempore voluptatem placeat mollitia praesentium sint blanditiis vitae nulla unde iusto, assumenda, alias, pariatur magnam eum eligendi officiis esse. Illum inventore facilis consequatur nostrum maxime hic iste reprehenderit eligendi, repellat vel, ullam provident. Nam doloremque minus aliquid possimus sequi veritatis officiis. Ullam nisi, doloribus voluptates architecto praesentium quo nostrum necessitatibus accusamus repudiandae facilis laborum voluptatum porro debitis illo consectetur veritatis aliquam. Et esse qui mollitia rem dolores ullam neque, sequi nostrum, expedita ex debitis.
            </Typography>
          </Grid>
        </Grid>
       
      </Grid>
      
    </Grid>
  )
}
