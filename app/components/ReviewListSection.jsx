"use client";

import React, { useState, useEffect } from "react";
import firebase_app from "../firebase/config";
import { getFirestore, collection, getDocs, orderBy, query } from 'firebase/firestore';
import {
   BiUserCircle
} from "react-icons/bi";
import ClipLoader from "react-spinners/ClipLoader";
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="secondary" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="info" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};


const db = getFirestore(firebase_app)

const ReviewList = () => {

    let [reviews, setReviews] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
    const getReviewList = async () => {
    await getDocs(query(collection(db,'reviews'), orderBy("timestamp","desc"))).then((todo) => {
        let todoData = todo.docs.map((doc) => ({
                    name: doc.data().name,
                    email: doc.data().email,
                    comment: doc.data().comment,
                    rating: doc.data().rating,
                    timestamp: doc.data().timestamp,
                }));
        setReviews(todoData);
        setLoading(false);

        }).catch((err) => {
        console.log(err);
        })
    }
    getReviewList();
    }, [])

  return (
    <div className="min-h-screen p-4">

    { loading &&
        <div className="flex flex-row space-x-4 justify-center">
            <div role="status" className="max-w-sm p-5 border border-gray-700 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                <div className="flex items-center mt-4 mb-4 space-x-3">
                    <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    <div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <span className="sr-only">Loading...</span>
            </div>

            <div role="status" className="max-w-sm p-5 border border-gray-700 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                <div className="flex items-center mt-4 mb-4 space-x-3">
                    <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    <div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <span className="sr-only">Loading...</span>
            </div>

            <div role="status" className="max-w-sm p-5 border border-gray-700 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                <div className="flex items-center mt-4 mb-4 space-x-3">
                    <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    <div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }

    <div className="text-white lg:grid lg:grid-cols-2 h-auto">
        {reviews.map(({name, email, comment, rating, timestamp}) =>
            <div key={email} className="mx-4 my-5 p-6 shadow-lg rounded-md bg-slate-800">
                <span className="flex justify-between">
                    <span className="text-2xl flex flex-row mb-6 text-sky-400"><BiUserCircle size={30} className="text-sky-500 me-2"/>{name}</span>
                    
                    <StyledRating
                        name="read-only" 
                        className="ms-10 rounded-md border-2 border-slate-600 px-2 py-1 h-fit text-slate-400" 
                        value={parseInt(rating)} 
                        IconContainerComponent={IconContainer}
                        getLabelText={(value) => customIcons[value].label}
                        highlightSelectedOnly
                        size="small"
                        readOnly />   
                </span>
                <hr className="mb-4 w-full m-auto text-slate-700"/>
                <p>{comment}</p>
                <p className="text-slate-500 text-sm mt-8 flex justify-center">On {timestamp}</p>
            </div>
        )}
    </div>

    </div>

    );
};

export default ReviewList;