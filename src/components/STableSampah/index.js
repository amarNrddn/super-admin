import { Card, Typography } from '@material-tailwind/react';
import React from 'react'
import { SPagination } from '../SPagination';

const TABLE_HEAD = ["NO", "Jenis Sampah", "Satuan", "Harga", ''];

const TABLE_ROWS = [
    {
        id: 1,
        jenis: 'Kertas',
        satuan: '1kg',
        harga: 'Rp. 3000,-'
    },
    {
        id: 1,
        jenis: 'Kertas',
        satuan: '1kg',
        harga: 'Rp. 3000,-'
    },
    {
        id: 1,
        jenis: 'Kertas',
        satuan: '1kg',
        harga: 'Rp. 3000,-'
    },
    {
        id: 1,
        jenis: 'Kertas',
        satuan: '1kg',
        harga: 'Rp. 3000,-'
    },
    {
        id: 1,
        jenis: 'Kertas',
        satuan: '1kg',
        harga: 'Rp. 3000,-'
    },
    {
        id: 1,
        jenis: 'Kertas',
        satuan: '1kg',
        harga: 'Rp. 3000,-'
    },

];

const STableSampah = () => {
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
                    {TABLE_ROWS.map(({ id, jenis, satuan, harga }, index) => (
                        <tr key={index} className="even:bg-blue-gray-50/50">
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {id}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {jenis}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {satuan}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {harga}
                                </Typography>
                            </td>
                            <td className="p-4 flex gap-1 items-center">
                                <Typography as="a" href="#" variant="small" color="blue" className="font-medium">
                                    Edit
                                </Typography>
                                <p>|</p>
                                <Typography as="a" href="#" variant="small" color="blue" className="font-medium">
                                    Hapus
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

export default STableSampah