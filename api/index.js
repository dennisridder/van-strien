import express from "express"
import Mailchimp from "mailchimp-api-v3"

const apiKey =
  process.env.MAILCHIMP_API_KEY || "d0e59b9028e09ae8868af5b56d5df25b-us19"
const audienceId = process.env.MAILCHIMP_AUDIENCE_ID || "d5606368df"
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
