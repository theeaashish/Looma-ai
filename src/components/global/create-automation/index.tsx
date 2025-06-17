import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../loader'
import AutomationLineIcon from '@/icons/AutomationLineIcon'

type Props = {}

const CreateAutomation = (props: Props) => {
  return (
    <Button className='lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 transition duration-300 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70]'>
        <Loader state={false}>
            <AutomationLineIcon />
            <p className='lg:inline hidden'>Create an Automation</p>
        </Loader>
    </Button>
  )
}

export default CreateAutomation