'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function CourseCard({ course }) {
  // course: { id, title, description, price, img }
// Function to handle Buy button click
function handleBuyClick() {
    console.log(course.price);
}

return (
    <article className="bg-white shadow-sm rounded-lg overflow-hidden border hover:shadow-lg transition">
        <div className="p-4 flex gap-4">
            {/* Logo/Image */}
            <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                {course.img ? (
                    <Image src={course.img} alt={course.title} width={80} height={80} className="object-cover" />
                ) : (
                    <div className="text-gray-400 text-xl font-bold">{course.title?.charAt(0)}</div>
                )}
            </div>

            {/* Details */}
            <div className="flex-1">
                <h3 className="font-semibold text-lg">{course.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{course.description}</p>

                <div className="mt-3 flex items-center justify-between">
                    <div className="text-sm font-medium text-indigo-600">₹{course.price}</div>
                    <Link href={`#/courses/${course.id}`} className="text-sm text-indigo-600 hover:underline">
                        View
                    </Link>
                    <button
                            className="ml-2 px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 text-sm"
                            onClick={handleBuyClick}
                    >
                            Buy
                    </button>
                </div>
            </div>
        </div>
    </article>
)
}
