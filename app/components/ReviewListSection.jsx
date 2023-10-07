"use client";

import React, { useState, useEffect } from "react";
import firebase_app from "../firebase/config";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import {
   BiUserCircle
} from "react-icons/bi";
import ClipLoader from "react-spinners/ClipLoader";


const db = getFirestore(firebase_app)

const ReviewList = () => {

    let [reviews, setReviews] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
    const getReviewList = async () => {
    await getDocs(collection(db,'reviews')).then((todo) => {
        let todoData = todo.docs.map((doc) => ({
                    name: doc.data().name,
                    email: doc.data().email,
                    comment: doc.data().comment,
                }));
        setReviews(todoData);
        setLoading(false);
        console.log(todoData);
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

    <div className="text-white lg:grid lg:grid-cols-3 h-auto">
        {reviews.map(({name, email, comment}) =>
            <div key={email} className="mx-4 my-5 p-6 shadow-lg rounded-md bg-slate-800">
                <span className="flex">
                    <BiUserCircle size={30} className="text-sky-500"/>
                    <h5 className="text-2xl mb-6 ms-3 text-sky-400">{name}</h5>      
                </span>
                <p>{comment}</p>
            </div>
        )}
    </div>

    </div>

    );
};

export default ReviewList;