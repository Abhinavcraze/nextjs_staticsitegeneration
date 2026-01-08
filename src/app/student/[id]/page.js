import React from 'react'

// This function tells Next.js which pages to build in advance (SSG)
export async function generateStaticParams() {
  const students = [1, 2, 3, 4, 5, 78, 89];
  
  return students.map((id) => ({
    id: id.toString(), // IDs must always be strings
  }));
}

const DynamicStudentPage = async ({ params }) => {
  // In Next.js 15, params is a Promise, so we await it
  const { id } = await params;

  return (
    <div>
      <h1>DynamicStudentPage</h1>
      <p>ID: {id}</p>
    </div>
  )
}

export default DynamicStudentPage