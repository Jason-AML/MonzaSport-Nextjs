import Link from "next/link";
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <span className="material-symbols-outlined collapse-open  text-green-500 mb-4 ">
check_circle
</span>
      <h1>Checkout Success</h1>
      <Link href="/collection" className="btn btn-primary mt-6">
        Back to Collection
      </Link>
    </div>
    
  )
}

export default page
