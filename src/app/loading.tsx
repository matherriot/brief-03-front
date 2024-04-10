"use client"
import { Triangle } from 'react-loader-spinner'
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <div className={"flex flex-col justify-center items-center"}><Triangle
    visible={true}
    height="128"
    width="128"
    color="#4fa94d"
    ariaLabel="triangle-loading"
    wrapperStyle={{}}
    wrapperClass=""
  /></div>;
}