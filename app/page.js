"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Home() {
  const [ data, setData ] = useState('');
  const fetchdata = async () => {
    const data  = await axios.get('/api/home');
    console.log(data);
  }
  useEffect(() => {
    fetchdata()
  })

  
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl text-center text-blue-500">My new portfolio</h1>
    </div>
  );
}
