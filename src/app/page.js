'use client'

import Breadcrumb from "../../components/Breadcrumb"
import Navbar from "../../components/Navbar"
import CoursesGrid from "../../components/CoursesGrid"
import { useEffect } from "react"

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

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js")
  }, [])
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Courses' }]} />
        <h1 className="text-2xl font-bold mb-4">Courses</h1>
        <CoursesGrid courses={courses} />
      </div>
    </main>
  )
}
