import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Dashboard from "../../pages/dashboard";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {
    InboxIcon,
    PowerIcon,
    DocumentTextIcon,
    ChartBarSquareIcon,
    ChevronDownIcon,
    ArrowUpCircleIcon,
    ArrowDownCircleIcon
} from "@heroicons/react/24/solid";

import { profile } from '../../assets'
import { Table } from "../../pages/nasabah";
import Pengepul from "../../pages/pengepul";
import Sampah from "../../pages/sampah";
import SLine from "../../components/SLine";
import SetorSampah from "../../pages/setor";
import TarikSaldo from "../../pages/tarik";
import PenjualanSampah from "../../pages/penjualan";
import Notification from "../../pages/notification";


const SideBar = ({ children }) => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <container className="w-full h-[100vh] min-h-[100vh] overflow-y-hidden flex relative">
            <Card className="h-[calc(100vh)] bg-[#4CAF50] sticky top-0 w-full max-w-[18rem] p-4 shadow-xl text-white shadow-blue-gray-900/5">
                <div className=" pt-4 px-4 pb-0">
                    <div className="flex items-center gap-2">
                        <div className="w-[70px] h-[70px]">
                            <img
                                src={profile}
                                className='rounded-full'
                                alt='profile'
                            />
                        </div>
                        <div className="">
                            <h2>Galuh P</h2>
                            <p className="text-[14px]">Admin</p>
                        </div>
                    </div>
                    <SLine></SLine>
                </div>
                <List>
                    <Link to={'/dashboard'}>
                        <Accordion>
                            <ListItem className="p-0">
                                <AccordionHeader className="border-b-0 p-3">
                                    <ListItemPrefix>
                                        <ChartBarSquareIcon className="h-5 w-5 text-white" />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-normal text-white">
                                        Dashboard
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                        </Accordion>
                    </Link>
                    <Link to={'/datanasabah'}>
                        <Accordion >
                            <ListItem className="p-0" >
                                <AccordionHeader className="border-b-0 p-3">
                                    <ListItemPrefix>
                                        <DocumentTextIcon className="h-5 w-5 text-white" />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-normal text-white">
                                        Nasabah
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                        </Accordion>
                    </Link>
                    <Link to={'/pengepul'}>
                        <Accordion >
                            <ListItem className="p-0" >
                                <AccordionHeader className="border-b-0 p-3">
                                    <ListItemPrefix>
                                        <DocumentTextIcon className="h-5 w-5 text-white" />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-normal text-white">
                                        Pengepul
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                        </Accordion>
                    </Link>
                    <Link to={'/sampah'}>
                        <Accordion >
                            <ListItem className="p-0" >
                                <AccordionHeader className="border-b-0 p-3">
                                    <ListItemPrefix>
                                        <DocumentTextIcon className="h-5 w-5 text-white" />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-normal text-white">
                                        Sampah
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                        </Accordion>
                    </Link>
                    <Accordion
                        open={open === 1}
                        icon={
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`mx-auto h-4 w-4 transition-transform text-white ${open === 1 ? "rotate-180" : " "}`}
                            />
                        }
                    >
                        <ListItem className="p-0" selected={open === 1}>
                            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                                <ListItemPrefix>
                                    <DocumentTextIcon className="h-5 w-5 text-white" />
                                </ListItemPrefix>
                                <Typography color="blue-gray" className="mr-auto font-normal text-white">
                                    Transaksi
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <Link to={'/setor'}>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ArrowDownCircleIcon strokeWidth={3} className="h-5 w-5 text-white" />
                                        </ListItemPrefix>
                                        Setor Sampah
                                    </ListItem>
                                </Link>
                                <Link to={'/tarik'}>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ArrowUpCircleIcon strokeWidth={3} className="h-5 w-5 text-white" />
                                        </ListItemPrefix>
                                        Tarik Saldo
                                    </ListItem>
                                </Link>
                                <Link to={'/penjualan'}>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ArrowUpCircleIcon strokeWidth={3} className="h-5 w-5 text-white" />
                                        </ListItemPrefix>
                                        Penjualan Sampah
                                    </ListItem>
                                </Link>
                            </List>
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        open={open === 2}
                        icon={
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`mx-auto h-4 w-4 transition-transform  text-white ${open === 2 ? "rotate-180" : ""}`}
                            />
                        }
                    >
                        <ListItem className="p-0" selected={open === 2}>
                            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                                <ListItemPrefix>
                                    <DocumentTextIcon className="h-5 w-5 text-white" />
                                </ListItemPrefix>
                                <Typography color="blue-gray" className="mr-auto font-normal text-white">
                                    Lainnya
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <Link to={'/notification'}>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <InboxIcon className="h-5 w-5 text-white" />
                                        </ListItemPrefix>
                                        Notifikasi
                                        <ListItemSuffix>
                                            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full text-white" />
                                        </ListItemSuffix>
                                    </ListItem>
                                </Link>
                                <ListItem>
                                    <ListItemPrefix>
                                        <DocumentTextIcon strokeWidth={3} className="h-5 w-5 text-white" />
                                    </ListItemPrefix>
                                    Laporan
                                </ListItem>
                            </List>
                        </AccordionBody>
                    </Accordion>
                    <ListItem>
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Log Out
                    </ListItem>
                </List>
            </Card>

            <section className="w-[calc(100vw-100rem)]  px-[10px] pr-[10px] pt-[30px]">{children}</section>
            <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/datanasabah' element={<Table />} />
                <Route path="/pengepul" element={<Pengepul />} />
                <Route path="/sampah" element={<Sampah />} />
                <Route path="/setor" element={<SetorSampah />} />
                <Route path="/tarik" element={<TarikSaldo />} />
                <Route path="/penjualan" element={<PenjualanSampah />} />
                <Route path="/notification" element={<Notification />} />
            </Routes>
        </container>
    );
}

export default SideBar