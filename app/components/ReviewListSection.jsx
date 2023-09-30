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
    <div className="text-white p-10 grid">

    <span className="flex justify-center" loading={loading}>
        <ClipLoader
        loading={loading}
        color="white"
        size={100}
        className="mx-auto"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </span>

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

    );
};

export default ReviewList;