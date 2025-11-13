import React from 'react'

export default function Section({ title, bgClass = '' }) {
  return (
    <section className={`min-h-screen flex items-center justify-center relative ${bgClass} slide-bg`}>
      {/* optional overlay */}
      <div className="slide-overlay" />
      <div className="max-w-3xl text-center z-10">
        <h2 className="text-3xl font-semibold text-sky-800">{title}</h2>
        <p className="mt-4 text-sky-600">Sample content for {title}. Replace with real listings, forms, or cards.</p>
      </div>
    </section>
  )
}
