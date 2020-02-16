import React, { useState } from "react"
import "payhere-embed-sdk/dist/react.css"
import Payhere from "payhere-embed-sdk/dist/react"

import siteConfig from "../../siteConfig"
import Layout from "../components/Layout"
import avatarImg from "../images/avatar.jpg"
import AmountPicker from "../components/AmountPicker"

export default () => {
  const [amount, setAmount] = useState(null)
  const [showPayhere, setShowPayhere] = useState(false)
  const [success, setSuccess] = useState(false)

  return (
    <Layout>
      <h1 className="font-semibold text-3xl text-gray-800 mb-4">
        5km run for cancer research
      </h1>
      <div className="flex items-center mb-8">
        <img src={avatarImg} alt="Alex" className="w-16 h-16 rounded-full mr-4" />
        <span className="font-semibold text-lg">Alex Baldwin</span>
      </div>
      <div className="leading-relaxed text-lg mb-8">
        <p className="mb-4">Help me beat cancer by sponsoring my 5km run. I’ve been training like crazy and really want to reach my goal of $2,000, any and all help is very much appreciated!</p>
        <p>All proceeds are going directly to <strong>Cancer Research</strong>.</p>
      </div>
      <div>
        <AmountPicker value={amount} onChange={setAmount} />
        <button
          className="mt-6 w-full bg-green-500 disabled:opacity-75 text-white font-semibold uppercase tracking-wider p-4 text-lg outline-none"
          onClick={() => {
            setShowPayhere(true)
          }}
          disabled={!amount || amount < 1}
        >
          Donate now
        </button>
      </div>
      <Payhere
        selector="#payhere-modal"
        open={showPayhere}
        amountInCents={amount * 100}
        hideAmount="yes"
        onSuccess={data => {
          console.log("Payhere success", data)
          setSuccess(true)
        }}
        onFailure={err => {
          console.log("Payhere failed", err)
        }}
        onClose={() => {
          setShowPayhere(false)
          if (success) {
            console.log("Payment success!")
          } else {
            console.log("Doing nothing, failed.")
          }
        }}
        embedURL={siteConfig.payherePlanURL}
      />
    </Layout>
  )
}
