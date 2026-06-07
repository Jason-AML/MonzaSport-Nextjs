import React from 'react'
import Link from "next/link";
const page = () => {
  return (
       <div className="flex flex-col items-center justify-center h-screen">
      <span className="material-symbols-outlined">
error
</span>
      <h1>Error</h1>
      <p>No se ha podido continuar con la operación</p>
      <Link href="/collection" className="btn btn-primary mt-6">
        Back to Collection
      </Link>
    </div>
  )
}

export default page
