"use client";
import React, { useState, useRef } from "react";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import addData from "../firebase/firestore/addReview";

import { purple, red } from '@mui/material/colors';

const primary = red[500]; 

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
    icon: <SentimentDissatisfiedIcon color="action" />,
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

const AddReview = () => {

    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      rating: "",
      comment: "",
    });

    const handleInput = (e) => {
      const fieldName = e.target.name;
      const fieldValue = e.target.value;

      setFormData((prevState) => ({
        ...prevState,
        [fieldName]: fieldValue
      }));
    }

    const submitForm = async (e) => {
      e.preventDefault();
      console.log(e);
      console.log(formData);

      const {result, error} = addData("reviews",formData.email, formData);

      if (!error) {
        setMessage("Thank you for your valuable comment!");
      } else {
        setMessage("Something went wrong! Please try again");
      }
  };

  return (
    <section>
        <div className="container flex justify-center mt-24 mb-20 mx-auto px-12 py-4">
            <h1 className="text-4xl font-semibold text-white">Share Your Experience</h1>
        </div>
        <div className="mx-10 md:mx-20 mb-20 flex flex-col justify-center">
            <h1 className="text-sm ms-9 text-slate-500">This information will be displayed publicly so be careful what you share.</h1>
            
            { message!="" && 
                <div id="toast-bottom-right" className="fixed flex items-center w-auto max-w-xs p-4 space-x-4 text-white bg-sky-900 rounded-lg right-5 bottom-5" role="alert">
                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
                        </svg>
                        <div className="pl-2 text-sm font-normal">{message}</div>
                        <button type="button" onClick={() => setMessage("")} class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-200 hover:text-slate-200 rounded-lg focus:ring-2
                      focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center 
                        h-8 w-8 dark:text-gray-200 dark:hover:text-white dark:bg-sky-600
                       dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
                            <span className="sr-only">Close</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                        </button>
                </div>
            }


            <form onSubmit={submitForm}>
                
                <label className="block mx-10 my-5">
                    <span className="block text-sm mb-2 font-medium text-slate-300">Full Name</span>
                    <input
                        required
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInput}
                        type="text"
                        className="mt-1 block w-2/4 px-3 py-2 bg-white text-slate-800 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        minLength={3}
                        maxLength={60}
                    />
                </label>

                <label className="block mx-10 my-5">
                    <span className="block text-sm mb-2 font-medium text-slate-300">Email Address</span>
                    <input
                        required
                        placeholder="Email Address"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInput}
                        className="mt-1 block w-2/4 px-3 py-2 bg-white text-slate-800 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        minLength={3}
                        maxLength={60}
                    />
                </label>

                <label className="block mx-10 my-5">
                    <span className="block text-sm mb-2 font-medium text-slate-300">Rating</span>
                    <StyledRating
                      name="rating"
                      onChange={handleInput}
                      defaultValue={2}
                      IconContainerComponent={IconContainer}
                      getLabelText={(value) => customIcons[value].label}
                      highlightSelectedOnly
                      className="bg-slate-200 p-2 rounded-md"
                    />
                </label>
            
                <label className="block mx-10 my-10">
                    <span className="block text-sm mb-2 font-medium text-slate-300">Reviews and Comments</span>
                    <textarea
                    required
                    name="comment"
                    value={formData.comment}
                    onChange={handleInput}
                    placeholder="Share your thoughts to help others"
                    rows={5}
                    className="mt-1 block w-3/4 px-3 py-2 bg-white text-slate-800 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    ></textarea>
                </label>

                <label className="flex justify-center">
                    <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-sky-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Submit Review
                    </button>
                </label>

            </form>
        </div>
    </section>
  );
};

export default AddReview;