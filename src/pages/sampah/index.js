import React from 'react'
import { SInput } from "../../components/input";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogFooter,
    Input,
} from "@material-tailwind/react";
import STableSampah from '../../components/STableSampah';

const Sampah = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <div className='w-full'>
            <h1 className='text-[20px] font-bold mt-[2rem]' >Data Sampah</h1>
            <div className="flex justify-between mt-[20px] mb-[20px] pr-[15px]">
                <Button onClick={handleOpen}>Tambah Sampah</Button>
                <Dialog open={open} handler={handleOpen}>
                    <div className="flex items-center justify-between">
                        <DialogHeader>Tambah Nasabah</DialogHeader>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="mr-3 h-5 w-5"
                            onClick={handleOpen}
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <div className="flex flex-col gap-[10px]">
                            <div className="w-72 ">
                                <Input label="Jenis Sampah" />
                            </div>
                            <div className="w-72 ">
                                <Input label="Satuan" />
                            </div>
                            <div className="w-72 ">
                                <Input label="Harga" />
                            </div>
                        </div>
                    </div>
                    <DialogFooter className="flex w-full justify-center">
                        <Button variant="gradient" color="green" onClick={handleOpen}>
                            Tambah
                        </Button>
                    </DialogFooter>
                </Dialog>
                <SInput label="Search" />
            </div>
            <STableSampah />
        </div>
    )
}

export default Sampah