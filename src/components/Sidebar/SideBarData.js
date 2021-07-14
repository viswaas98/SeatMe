import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';


export const SidebarData = [
    {
        title: 'Host',
        path: '/dashboard',
        icon: <AiIcons.AiFillHome className="text-white"/>,
        cname: 'nav-text'
    },
    {
        title: 'Reservations',
        path: '/reservations',
        icon: <FaIcons.FaBookmark className="text-white"/>,
        cname: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <FiIcons.FiSettings className="text-white"/>,
        cname: 'nav-text'
    },
    
]