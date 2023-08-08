import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Button,
    Input,
} from "@material-tailwind/react"
import { BiUserCircle } from 'react-icons/bi'

import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const hendeleLogin = () => {
        navigate('/dashboard')
        console.log('hai')
    }
    return (
        <div className='w-[100%] h-[100vh] flex justify-center items-center bg-[#5C5C5C]'>
            <Card className="mt-6 w-96 bg-[#4CAF50]">
                <div className="w-full flex items-cenet justify-center">
                    <BiUserCircle className='bg-white w-[5rem] h-[5rem] absolute top-[-15%] rounded-full text-center text-[10px] font-bold' />
                </div>
                <h1 className='text-center text-white mt-[3.5rem]'>Hi, Welcome</h1>
                <CardBody>
                    <div className="w-full mb-2 text-white">
                        <Input label="Username" />
                    </div>
                    <div className="w-full text-white">
                        <Input type="password" label="Username" />
                    </div>
                </CardBody>
                <CardFooter className="pt-0 flex justify-center">
                    <Button
                        onClick={() => hendeleLogin()}
                        className="w-full"
                    >Login
                    </Button>
                </CardFooter>
            </Card>


        </div>
    )
}

export default Login