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
    }
  }
`

const IndexPage = ({ data }) => {
  const { title, author, avatar, mainImage, _rawBody } = data.sanitySiteContent
  const [amount, setAmount] = useState(null)
  const [recurring, setRecurring] = useState(false)
  const [showPayhere, setShowPayhere] = useState(false)
  const [success, setSuccess] = useState(false)

  const validAmount = amount && amount >= 1

  return (
    <Layout title={title} mainImage={mainImage}>
      <h1 className="font-semibold text-3xl text-gray-800 mb-4">
        {title}
      </h1>
      <div className="flex items-center mb-8">
        <Img fixed={avatar.asset.fixed} alt={author} className="w-16 h-16 rounded-full mr-4" />
        <span className="font-semibold text-lg">{author}</span>
      </div>
      <BlockContent
        className="sanity-content leading-relaxed text-lg mb-8"
        blocks={_rawBody}
        renderContainerOnSingleChild={true}
        projectId={siteConfig.sanitySiteId}
        dataset={siteConfig.sanityDataset}
      />
      <div>
        <AmountPicker value={amount} onChange={setAmount} />
        {amount && !validAmount &&
          <span className="block my-3 text-red-500">Please give at least $1</span>
        }
        <label className="flex mt-4 items-center text-lg" htmlFor="recurring-donation">
          <input
            id="recurring-donation"
            type="checkbox"
            className="mr-4"
            checked={recurring}
            onChange={e => setRecurring(e.target.checked)}
          />
          Make it a regular gift
        </label>
        { validAmount ?
          <button
            className="mt-6 w-full bg-green-500 text-white font-semibold uppercase tracking-wider p-4 text-lg outline-none"
            onClick={() => {
              setShowPayhere(true)
            }}
          >
            Donate ${amount}
            {recurring && ` per month`}
          </button>
        :
          <div
            className="mt-6 w-full bg-green-300 text-white font-semibold text-center uppercase tracking-wider p-4 text-lg"
          >
            Select donation amount
          </div>
        }
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
        embedURL={recurring ? siteConfig.payherePlanURLmonthly : siteConfig.payherePlanURLoneOff}
      />
    </Layout>
  )
}

export default IndexPage
