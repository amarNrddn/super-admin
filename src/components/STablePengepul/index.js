import { Card, Typography } from '@material-tailwind/react';
import React from 'react'
import { SPagination } from '../SPagination';

const TABLE_HEAD = ["NO", "Kode Pengepul", "Nama Pengepul", "RT", 'RW', 'Alamat', 'No Telp', ''];

const TABLE_ROWS = [
  {
    id: 1,
    kode: 221122,
    nama: 'Galuh P',
    rt: 1,
    rw: 2,
    alamat: 'Jl.Kusuma no 12',
    notelp: '0895322321248',
    saldo: '12334'
  },
  {
    id: 1,
    kode: 221122,
    nama: 'Galuh P',
    rt: 1,
    rw: 2,
    alamat: 'Jl.Kusuma no 12',
    notelp: '0895322321248',
    saldo: '12334'
  },
  {
    id: 1,
    kode: 221122,
    nama: 'Galuh P',
    rt: 1,
    rw: 2,
    alamat: 'Jl.Kusuma no 12',
    notelp: '0895322321248',
    saldo: '12334'
  },
  {
    id: 1,
    kode: 221122,
    nama: 'Galuh P',
    rt: 1,
    rw: 2,
    alamat: 'Jl.Kusuma no 12',
    notelp: '0895322321248',
    saldo: '12334'
  },
  {
    id: 1,
    kode: 221122,
    nama: 'Galuh P',
    rt: 1,
    rw: 2,
    alamat: 'Jl.Kusuma no 12',
    notelp: '0895322321248',
    saldo: '12334'
  },
  {
    id: 1,
    kode: 221122,
    nama: 'Galuh P',
    rt: 1,
    rw: 2,
    alamat: 'Jl.Kusuma no 12',
    notelp: '0895322321248',
    saldo: '12334'
  },
  {
    id: 1,
    kode: 221122,
    nama: 'Galuh P',
    rt: 1,
    rw: 2,
    alamat: 'Jl.Kusuma no 12',
    notelp: '0895322321248',
    saldo: '12334'
  },
  {
    id: 1,
    kode: 221122,
    nama: 'Galuh P',
    rt: 1,
    rw: 2,
    alamat: 'Jl.Kusuma no 12',
    notelp: '0895322321248',
    saldo: '12334'
  },
  {
    id: 1,
    kode: 221122,
    nama: 'Galuh P',
    rt: 1,
    rw: 2,
    alamat: 'Jl.Kusuma no 12',
    notelp: '0895322321248',
    saldo: '12334'
  },
  {
    id: 1,
    kode: 221122,
    nama: 'Galuh P',
    rt: 1,
    rw: 2,
    alamat: 'Jl.Kusuma no 12',
    notelp: '0895322321248',
    saldo: '12334'
  },
  {
    id: 1,
    kode: 221122,
    nama: 'Galuh P',
    rt: 1,
    rw: 2,
    alamat: 'Jl.Kusuma no 12',
    notelp: '0895322321248',
    saldo: '12334'
  },

];

const STablePengepul = () => {
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
                    {TABLE_ROWS.map(({ id, kode, nama, rt, rw, alamat, notelp, }, index) => (
                        <tr key={index} className="even:bg-blue-gray-50/50">
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {id}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {kode}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {nama}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {rt}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {rw}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {alamat}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {notelp}
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

export default STablePengepul