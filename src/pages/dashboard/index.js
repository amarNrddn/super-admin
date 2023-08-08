import React from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { cardMony } from '../../assets';
import Sgrafik from '../../components/SGrafik';
import { SButton } from '../../components/SButton';

const Dashboard = () => {
  return (
    <div className='w-full h-[100vh] overflow-y-auto'>
      <h1 className='text-[20px] font-bold mt-[2rem]'>Dashboard</h1>
      <div className="flex w-full flex-wrap justify-start gap-[10px]">
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Pemasukan Tahun ini
            </Typography>

            <div className="flex justify-between">
              <img
                src={cardMony}
                alt="card"
              />
              <h3 className='text-[40px]'>Rp. 500.000,-</h3>
            </div>

          </CardBody>
          <CardFooter className="pt-0 flex justify-end">
            <Button>Lihat Detail</Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Pemasukan Tahun ini
            </Typography>

            <div className="flex justify-between">
              <img
                src={cardMony}
                alt="card"
              />
              <h3 className='text-[40px]'>Rp. 500.000,-</h3>
            </div>

          </CardBody>
          <CardFooter className="pt-0 flex justify-end">
            <Button>Lihat Detail</Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Pemasukan Tahun ini
            </Typography>

            <div className="flex justify-between">
              <img
                src={cardMony}
                alt="card"
              />
              <h3 className='text-[40px]'>Rp. 500.000,-</h3>
            </div>

          </CardBody>
          <CardFooter className="pt-0 flex justify-end">
            <Button>Lihat Detail</Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Pemasukan Tahun ini
            </Typography>

            <div className="flex justify-between">
              <img
                src={cardMony}
                alt="card"
              />
              <h3 className='text-[40px]'>Rp. 500.000,-</h3>
            </div>

          </CardBody>
          <CardFooter className="pt-0 flex justify-end">
            <Button>Lihat Detail</Button>
          </CardFooter>
        </Card>
      </div>
      <div className="w-[85%] h-[50%] mt-[3rem]">
      <SButton className="mb-[2rem]">Infografis Bulanan</SButton>
        <Sgrafik />   
      </div>
    </div>
  )
}

export default Dashboard