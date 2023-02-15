import React from 'react'
import {
    useRouteError
} from "react-router-dom";
const ErrorPage = () => {
    const err = useRouteError();
    const {
        data,
        status,
        statusText
    } = err;
    console.log(err);
  return (
    <div>
        <h1> {status} {statusText} </h1>
        <h2>Oops!!! Something Went Wrong</h2>
        <h2> {data} </h2>
    </div>
  )
}

export default ErrorPage
