'use client'

import Breadcrumb from "../../components/Breadcrumb"
import Navbar from "../../components/Navbar"
import CoursesGrid from "../../components/CoursesGrid"
import { useEffect } from "react"
import axios from "axios"

export default function Page() {
  const courses = [
    {
      id: 1,
      title: 'React for Beginners',
      description: 'Learn the fundamentals of React: components, props, state and hooks.',
      price: 499,
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    },
    {
      id: 2,
      title: 'Node.js Masterclass',
      description: 'Backend fundamentals with Node.js, Express and REST APIs.',
      price: 799,
      img: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    },
    {
      id: 3,
      title: 'Next.js from Scratch',
      description: 'Build full-stack apps with Next.js and Server Actions.',
      price: 999,
      img: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
    },
  ]
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script")
      script.src = src
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  const onPayment = async (price , itemName)=>{
    // create order
    try{
      const options = {
        courseID : 1,
        amount : price
      } 
      const res = await axios.post('http://localhost:4000/api/create-order',options);
      const data = res.data;
      console.log(data);
      const order = data.order; 
      const paymentOptions = new window.Razorpay({
        key: process.env.RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
        amount: order.amount.toString(),
        currency: order.currency,
        name: "Vivek Verma",
        description: itemName,
        order_id: order.id,
        handler: function (response) {
          alert("Payment Successful");
          console.log(response);
          const options2 = {
            order_id : response.razorpay_order_id,
            payment_id : response.razorpay_payment_id,
            signature : response.razorpay_signature
          }
          axios.post('http://localhost:4000/api/verify-payment',options2).then((res)=>{
            console.log(res.data);
            if(res.data.success){
              alert("Payment Verified Successfully");
            }else{
              alert("Payment Verification Failed");
            }
          }).catch((err)=>{
            console.error(err);
          })
        }
      });
      paymentOptions.open();
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js")
  }, [])
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Courses' }]} />
        <h1 className="text-2xl font-bold mb-4">Courses</h1>
        <CoursesGrid onPayment={onPayment} courses={courses} />
      </div>
    </main>
  )
}
