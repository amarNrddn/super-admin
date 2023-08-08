import React from 'react'
import { Card, Typography } from '@material-tailwind/react';
import { SPagination } from '../SPagination';

const TABLE_HEAD = ["Tanggal", "Jenis Sampah", "Jenis Barang", "Berat (Kg)", 'Harga', 'Nama Pembeli'];

const TABLE_ROWS = [
    {
        tanggal: '6/24/2023',
        jenisSampah: 'Kertas',
        jenisBarang: 'HVS',
        berat: '30 Kg',
        harga: 'Rp. 50.000,-',
        namaPembeli: 'Arji'
    },
    {
        tanggal: '6/24/2023',
        jenisSampah: 'Kertas',
        jenisBarang: 'HVS',
        berat: '30 Kg',
        harga: 'Rp. 50.000,-',
        namaPembeli: 'Arji'
    },
    {
        tanggal: '6/24/2023',
        jenisSampah: 'Kertas',
        jenisBarang: 'HVS',
        berat: '30 Kg',
        harga: 'Rp. 50.000,-',
        namaPembeli: 'Arji'
    },
    {
        tanggal: '6/24/2023',
        jenisSampah: 'Kertas',
        jenisBarang: 'HVS',
        berat: '30 Kg',
        harga: 'Rp. 50.000,-',
        namaPembeli: 'Arji'
    },
    {
        tanggal: '6/24/2023',
        jenisSampah: 'Kertas',
        jenisBarang: 'HVS',
        berat: '30 Kg',
        harga: 'Rp. 50.000,-',
        namaPembeli: 'Arji'
    },
    {
        tanggal: '6/24/2023',
        jenisSampah: 'Kertas',
        jenisBarang: 'HVS',
        berat: '30 Kg',
        harga: 'Rp. 50.000,-',
        namaPembeli: 'Arji'
    },

];

const STablePenjualan = () => {
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
                    {TABLE_ROWS.map(({ tanggal, jenisSampah, jenisBarang, berat, harga, namaPembeli }, index) => (
                        <tr key={index} className="even:bg-blue-gray-50/50">
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {tanggal}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {jenisSampah}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {jenisBarang}
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
                                    {namaPembeli}
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

export default STablePenjualan