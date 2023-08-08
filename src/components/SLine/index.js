import { Typography } from '@material-tailwind/react'
import React from 'react'

const SLine = ({children}) => {
    return (
        <div className="">
            <div className="w-[200px] h-[1px] bg-white flex justify-center items-center mt-4"></div>
            <Typography color="blue-gray" className="mr-auto font-normal mt-2 text-white">
                {children}
            </Typography>
        </div>
    )
}

export default SLine