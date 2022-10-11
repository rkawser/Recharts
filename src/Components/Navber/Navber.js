import React, { useState } from 'react';
import Link from '../Link/Link';
import './Navber.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navber = () => {
    const [open, setOpen] = useState(false)

    const navberData = [
        { name: 'Home', id: 1, link: '/home' },
        { name: 'Shop', id: 2, link: '/shop' },
        { name: 'Deals', id: 3, link: '/deals' },
        { name: 'Cupons', id: 4, link: '/cupons' },
        { name: 'Contact', id: 5, link: '/contact' }
    ]
    return (

        <nav className='bg-indigo-200'>
            <div onClick={() => { setOpen(!open) }} className='w-6 h-6 md:hidden'>
                {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon ></Bars3Icon>}
            </div>
            <ul className={`md:flex justify-center bg-indigo-200 absolute md:static 
            w-full duration-500 ease-in py-5 ${open? 'top-6' : 'top-[-500px]'}`}>
                {
                    navberData.map(route => <Link
                        key={route.id}
                        route={route}>

                    </Link>)
                }
            </ul>
        </nav>
    );
};

export default Navber;