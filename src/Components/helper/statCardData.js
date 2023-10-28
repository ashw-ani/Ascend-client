import React from 'react';
import { IoDiamondOutline } from 'react-icons/io5';
import { BsCashCoin } from 'react-icons/bs';
import { PiBuildings } from 'react-icons/pi';
import { LiaClipboardListSolid } from 'react-icons/lia';
import { PiFunnel } from 'react-icons/pi';
import { IoIosPeople } from 'react-icons/io';
import { FaRegHandshake } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';

const cardData = {
  colors: [
    'cyan_blue',
    'pink_red',
    'green_sea',
    'yellow_orange',
    'cyan_blue',
    'pink_red',
    'green_sea',
    'yellow_orange',
  ],
  title: [
    'My Points',
    'My Earnings',
    'My Attendance',
    'My Tasks',
    'My Leads',
    'My Customers',
    'My Charity',
    'Overall Charity',
  ],
  clipart: [
    <IoDiamondOutline />,
    <BsCashCoin />,
    <PiBuildings />,
    <LiaClipboardListSolid />,
    <PiFunnel />,
    <IoIosPeople />,
    <AiOutlineHeart />,
    <FaRegHandshake />,
  ],
};
export default cardData;
