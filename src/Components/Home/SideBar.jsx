import React from 'react'
import { Link } from 'react-router-dom'


export default function SideBar()
{
    return (
        <nav className='bg-[#14144a] text-indigo-200 w-1/8 flex justify-center items-center '>
            <ul className='flex flex-col justify-around min-h-1/2'>
                <Link to='/Feed'>
                    <li
                        className='p-4 text-center hover:bg-indigo-900 active:bg-indigo-950 my-1 border-0 rounded-2xl'>
                        Feed
                    </li>
                </Link>
                <Link to='/Trending'>
                    <li
                        className='p-4 text-center hover:bg-indigo-900 active:bg-indigo-950 my-1 border-0 rounded-2xl'>
                        Trending
                    </li>
                </Link>
                <Link to='/'>
                    <li
                        className='p-4 text-center hover:bg-indigo-900 active:bg-indigo-950 my-1 border-0 rounded-2xl'>
                        Player
                    </li>
                </Link>
                <Link to='/Favourites'>
                    <li
                        className='p-4 text-center hover:bg-indigo-900 active:bg-indigo-950 my-1 border-0 rounded-2xl'>
                        Favourites
                    </li>
                </Link>
                <Link to='/Library'>
                    <li
                        className='p-4 text-center hover:bg-indigo-900 active:bg-indigo-950 my-1 border-0 rounded-2xl'>
                        Library
                    </li>
                </Link>
            </ul>
        </nav>
    )
}
