import { Button } from '@/components/ui/button'
import LogoSmall from '@/svgs/logo-small'
import Image from 'next/image'
import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <nav className='flex absolute bg-gray-5050 px-20 w-full py-4 z-[999]'>

        <div className='flex w-full items-center justify-between'>
            <div>
                <LogoSmall fillColor='white' width={120}/>
            </div>

            <div>
                <ul className='flex gap-16'>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Prices</li>
                    <li>Blog</li>
                </ul>
            </div>

            <div>
                <Button className='rounded-xl font-semibold'>Sign In</Button>
            </div>
        </div>
        
    </nav>
  )
}

export default NavBar