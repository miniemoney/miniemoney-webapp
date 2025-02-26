"use client"

import Spinner from "@/components/Spinner/Spinner"
import { Suspense } from "react"
import PaymentConfirmationPage from "./page-client"

const Page = () => { 
  return (
    <Suspense fallback={<Spinner className="loading" />}>
      <PaymentConfirmationPage />
    </Suspense>
  )
}

export default Page