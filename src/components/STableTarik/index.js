import React from 'react'
import { Card, Typography } from '@material-tailwind/react';
import { SPagination } from '../SPagination';

const TABLE_HEAD = ["Invoice", "Kode Nasabah", "Nama Nasabah", "Saldo Awal", 'jumlah Tarik', 'Saldo Ahir', 'Status'];

const TABLE_ROWS = [
    {
        invoice: 'PYM1101001',
        kodeN: 'KN1101001',
        nama: 'Galuh Dwi Agung Putra',
        saldoAwal: 'Rp. 50.000,-',
        jumlahT: 'Rp. 20.000,-',
        saldoAhir: 'Rp. 30.000,-',
        status: 'BUTTON CHECK'
    },
    {
        invoice: 'PYM1101001',
        kodeN: 'KN1101001',
        nama: 'Galuh Dwi Agung Putra',
        saldoAwal: 'Rp. 50.000,-',
        jumlahTarik: 'Rp. 20.000,-',
        saldoAhir: 'Rp. 30.000,-',
        status: 'Success'
    },

];

const STableTarik = () => {
    return (
        <Card className="h-full w-full overflow-scroll pb-[10rem]">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {TABLE_ROWS.map(({ invoice, kodeN, nama, saldoAwal, jumlahTarik, saldoAhir, status }, index) => (
                        <tr key={index} className="even:bg-blue-gray-50/50">
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {invoice}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {kodeN}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {nama}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {saldoAwal}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {jumlahTarik}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {saldoAhir}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {status}
                                </Typography>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="w-full flex justify-center mt-[2rem]">
                <SPagination />
            </div>
        </Card>
    )
}

export default STableTarik