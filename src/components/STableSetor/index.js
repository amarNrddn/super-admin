import React from 'react'
import { Card, Typography } from '@material-tailwind/react';
import { SPagination } from '../SPagination';

const TABLE_HEAD = ["NO", "Tanggal", "Kode Nasabah", "Jenis Sampah", 'Jenis Barang', 'Berat(Kg)', 'Harga', 'Total', 'kode Pengepul'];

const TABLE_ROWS = [
    {
        id: 1,
        tanggal: '06/24/2023',
        kode: 'KN1101001',
        jenisS: 'Kertas',
        jenisB: 'HVS',
        berat: '2 Kg',
        harga: 'Rp, 3000,-',
        total: 'Rp. 6000,-',
        kodePengepul: 'KP1101001'
    },
    {
        id: 1,
        tanggal: '06/24/2023',
        kode: 'KN1101001',
        jenisS: 'Kertas',
        jenisB: 'HVS',
        berat: '2 Kg',
        harga: 'Rp, 3000,-',
        total: 'Rp. 6000,-',
        kodePengepul: 'KP1101001'
    },
    {
        id: 1,
        tanggal: '06/24/2023',
        kode: 'KN1101001',
        jenisS: 'Kertas',
        jenisB: 'HVS',
        berat: '2 Kg',
        harga: 'Rp, 3000,-',
        total: 'Rp. 6000,-',
        kodePengepul: 'KP1101001'
    },
    {
        id: 1,
        tanggal: '06/24/2023',
        kode: 'KN1101001',
        jenisS: 'Kertas',
        jenisB: 'HVS',
        berat: '2 Kg',
        harga: 'Rp, 3000,-',
        total: 'Rp. 6000,-',
        kodePengepul: 'KP1101001'
    },

];

const STableSetor = () => {
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
                    {TABLE_ROWS.map(({ id, tanggal, kode, jenisS, jenisB, berat, harga, total, kodePengepul }, index) => (
                        <tr key={index} className="even:bg-blue-gray-50/50">
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {id}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {tanggal}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {kode}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {jenisS}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {jenisB}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {berat}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {harga}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {total}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {kodePengepul}
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

export default STableSetor