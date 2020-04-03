import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"
import "payhere-embed-sdk/dist/react.css"
import Payhere from "payhere-embed-sdk/dist/react"

import siteConfig from "../../siteConfig"
import Layout from "../components/Layout"
import AmountPicker from "../components/AmountPicker"

export const pageQuery = graphql`
  {
    sanitySiteContent {
      title
      author
      _rawBody
      mainImage {
        asset {
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
      avatar {
        asset {
          fixed(height: 64, width: 64) {
            ...GatsbySanityImageFixed
          }
        }
      }
      thanks
    }
  }
`

const IndexPage = ({ data }) => {
  const {
    title,
    author,
    avatar,
    mainImage,
    _rawBody,
    thanks,
  } = data.sanitySiteContent
  const [amount, setAmount] = useState(null)
  const [currency, setCurrency] = useState("USD")
  const [recurring, setRecurring] = useState(false)
  const [showPayhere, setShowPayhere] = useState(false)
  const [success, setSuccess] = useState(false)

  const validAmount = amount && amount >= 1
  const symbol = currency === "USD" ? "$" : "£"

  return (
    <Layout mainImage={mainImage}>
      <h1 className="font-semibold text-3xl text-gray-800 mb-4">{title}</h1>
      <div className="flex items-center mb-8">
        <Img
          fixed={avatar.asset.fixed}
          alt={author}
          className="w-16 h-16 rounded-full mr-4"
        />
        <span className="font-semibold text-lg">{author}</span>
      </div>
      <BlockContent
        className="sanity-content leading-relaxed text-lg mb-8"
        blocks={_rawBody}
        renderContainerOnSingleChild={true}
        projectId={siteConfig.sanitySiteId}
        dataset={siteConfig.sanityDataset}
      />
      {success ? (
        <div className="px-4 py-8 rounded-lg border-2 border-green-500 text-green-500 text-white text-center">
          <h2 className="text-xl font-semibold">{thanks}</h2>
        </div>
      ) : (
        <div>
          <div className="flex items-center mb-5">
            <span className="mr-3">Currency</span>
            <input
              type="radio"
              id="dollars"
              checked={currency === "USD"}
              onChange={() => setCurrency("USD")}
            />
            <label htmlFor="dollars" className="ml-1 mr-3">
              $ Dollars
            </label>
            <input
              type="radio"
              id="pounds"
              checked={currency === "GBP"}
              onChange={() => setCurrency("GBP")}
            />
            <label htmlFor="pounds" className="ml-1 mr-3">
              £ Pounds
            </label>
          </div>
          <AmountPicker value={amount} onChange={setAmount} symbol={symbol} />
          {amount && !validAmount && (
            <span className="block my-3 text-red-500">
              Please give at least $1
            </span>
          )}
          <label
            className="flex mt-4 items-center text-lg"
            htmlFor="recurring-donation"
          >
            <input
              id="recurring-donation"
              type="checkbox"
              className="mr-4"
              checked={recurring}
              onChange={e => setRecurring(e.target.checked)}
            />
            Make it a regular gift
          </label>
          {validAmount ? (
            <button
              className="mt-6 w-full bg-green-500 text-white font-semibold uppercase tracking-wider p-4 text-lg outline-none"
              onClick={() => {
                setShowPayhere(true)
              }}
            >
              Donate {symbol}
              {amount}
              {recurring && ` per month`}
            </button>
          ) : (
            <div className="mt-6 w-full bg-green-300 text-white font-semibold text-center uppercase tracking-wider p-4 text-lg">
              Select donation amount
            </div>
          )}
        </div>
      )}
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
        embedURL={
          recurring
            ? currency === "USD"
              ? siteConfig.payherePlanURLmonthlyUSD
              : siteConfig.payherePlanURLmonthly
            : currency === "USD"
            ? siteConfig.payherePlanURLoneOffUSD
            : siteConfig.payherePlanURLoneOff
        }
      />
    </Layout>
  )
}

export default IndexPage
