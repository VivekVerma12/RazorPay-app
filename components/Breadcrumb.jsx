'use client'
import Link from 'next/link'

export default function Breadcrumb({ items = [] }) {
  // items example: [{ label: 'Home', href: '/' }, { label: 'Courses' }]
  return (
    <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center">
            {idx !== 0 && <span className="mx-2 text-gray-300">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-700">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
