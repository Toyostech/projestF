"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation';
import NAV_LINKS from '@/app/link/Link'

import style from '@/app/navbar.module.css'
import { red } from '@mui/material/colors';
// import { Height } from '@mui/icons-material';
// import { height } from '@mui/system';


const Navbar = () => {
    const [open, setOpen] = useState(false);


    const currentpath = usePathname()
    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Blog', href: '/blog' }


    ]


    const Menuhandler = (event) => {
        event.preventDefault()
        setOpen((prev) => !prev)

    }

    // const session = [
    //     { label: '/login', href: 'Login' },
    //     { label: '/register', href: 'Regiter' }

    // ]
    const sesion = true
    const isAdmin = true
    return (
        <div>
            <div>
                <nav className={style.containe} style={{
                    
                    display: 'flex',
                    justifyContent: "space-between",
                    padding: "container",

                    zIndex: 30,
                    paddingTop: 5,
                    background: "red",


                }}>
                    <Link href='/' className= {style.logo_link}>
                        Logo

                    </Link>
                    <ul className={style.ul}
                        style={{
                            position: "hidden",
                            height: 'full',
                            gap: 12,

                        }}>


                        {/* {links.map(link =>
                            <Link
                                key={link.href}
                                href={link.href}
                            >{link.label}</Link>)} */}
                        {/* {NAV_LINKS.map((link)=> (
                            <Link href={link.href} key={link.key} >
                                {link.label}
                            </Link>
                            
                        ))} */}

                        {links.map((link) =>
                             <li className=''>
                                <Link className={`${style.nav_link} ${currentpath === link.href && style.active}`}
                                    key={link.href}
                                    href={link.href}
                                >{link.label}</Link>
                            </li>
                        )}
                        {/* <li>
                    <Link href='/issues'>Issues</Link>
                    
                </li>
                <li>
                    <Link href='/about'>About</Link>

                </li>
                <li>
                    <Link href='/contact'>Contact</Link>

                </li> */}
                    </ul>

                </nav>


            </div>
            <button onClick={Menuhandler} className={style.moblebtn}>menu</button>
            {
                open && <div className={style.moblelink}>
                    {links.map((link) => (
                        <li className=''>
                            <Link className={`${style.nav_link} ${currentpath === link.href && style.active}`}
                                key={link.href}
                                href={link.href}
                            >{link.label}</Link>
                        </li>

                    ))}


                </div>
            }
        </div>



    )
}

export default Navbar
