'use client'
import CourseCard from './CourseCard'

export default function CoursesGrid({ courses = [], onPayment }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((c) => (
        <CourseCard key={c.id} course={c} onPayment={onPayment} />   // <-- passing `course={c}`
      ))}
    </div>
  )
}
