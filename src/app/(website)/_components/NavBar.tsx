import LogoSmall from '@/svgs/logo-small'
import Image from 'next/image'
import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <nav className='flex absolute bg-gray-500 w-full py-4'>

        <div className='flex w-full items-center justify-between'>
            <div>
                <LogoSmall fillColor='white' width={120}/>
            </div>

            <div>
                <ul className='flex'>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Prices</li>
                    <li>Blog</li>
                </ul>
            </div>

            <div>
                <button>Sign In</button>
            </div>
        </div>
        
    </nav>
  )
}

export default NavBar