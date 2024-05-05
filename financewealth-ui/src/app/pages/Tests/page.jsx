'use client';

import Footer from "../../components/Footer/Footer";
import {useDispatch, useSelector} from 'react-redux';
import { increment, decrement } from "../../ReduxStore/testing/slicerTesting";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { AddressForm } from "@/app/components/User/register/AddressForm";
import Stock from "@/app/components/Stock/Stock";

const Tests = () => {

    return (
        <>
            <Stock />
        </>

    )
        }
    
    export default Tests;