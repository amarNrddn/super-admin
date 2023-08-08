import React from 'react'
import { Card, Typography } from '@material-tailwind/react';

const TABLE_HEAD = ["NO", "Nama Pengumuman", "Deskripsi", "Gambar", ''];

const TABLE_ROWS = [
    {
        id: 1,
        nama: 'Harga Turun',
        deskripsi: 'Harga Sampah Turun',
        gambar: 'hargaturun.jpg'
    },

];

const STablePengumuman = () => {
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
                    {TABLE_ROWS.map(({ id, nama, deskripsi, gambar }, index) => (
                        <tr key={index} className="even:bg-blue-gray-50/50">
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {id}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {nama}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {deskripsi}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {gambar}
                                </Typography>
                            </td>
                            <td className="p-4 flex gap-1 items-center">
                                <Typography as="a" href="#" variant="small" color="blue" className="font-medium">
                                    Hapus
                                </Typography>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    )
}

export default STablePengumuman