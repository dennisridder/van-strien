import express from "express"
import Mailchimp from "mailchimp-api-v3"
// import mailchimpMarketing from "@mailchimp/mailchimp_marketing"

const apiKey = process.env.MAILCHIMP_API_KEY
const audienceId = process.env.MAILCHIMP_LIST_ID
const mailchimp = new Mailchimp(apiKey)

const app = express()
app.use(express.json())

app.post("/subscribe", async (req, res) => {
  const { email: email_address } = req.body
  try {
    const response = await mailchimp.request({
      method: "post",
      path: `/lists/${audienceId}/members`,
      body: {
        email_address,
        status: "subscribed"
      }
    })
    console.log("EXPRESS RESPONSE", response)
    const { _links, ...result } = response
    res.status(result.statusCode).json(result)
  } catch (err) {
    res.status(err.status).send(err.detail)
  }
})

export default {
  path: "/api",
  handler: app
}

// MAILCHIMP MARKETING API
// mailchimp.setConfig({
//   apiKey: "YOUR_API_KEY",
//   server: "YOUR_SERVER_PREFIX"
// })

// async function run() {
//   const response = await mailchimpMarketing.ping.get()
//   console.log(response)
// }

// run()
