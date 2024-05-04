'use client';

import Footer from "../../components/Footer/Footer";
import {useDispatch, useSelector} from 'react-redux';
import { increment, decrement } from "../../ReduxStore/testing/slicerTesting";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { AddressForm } from "@/app/components/User/register/AddressForm";

const Tests = () => {
    const counter = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    return (
        <>
            <AddressForm />
        </>

    )
        }
    
    export default Tests;