import express from "express"
import Mailchimp from "mailchimp-api-v3"

const ActiveCampaign = require("activecampaign")

const apiKey = process.env.MAILCHIMP_API_KEY
const audienceId = process.env.MAILCHIMP_AUDIENCE_ID
const mailchimp = new Mailchimp(apiKey)

const ac = new ActiveCampaign(process.env.ACTIVECAMPAIGN_API_URL, process.env.ACTIVECAMPAIGN_API_KEY);

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

app.post("/subscribe-ac", async (req, res) => {
  const { contact, listId } = req.body
  try {
    const response = await ac.api('contact/sync', { contact: contact })
    const contactId = response.fieldValues.contact
    const data = {
      contactList: {
          list: listId,
          contact: contactId,
          status: 1
      }
    }

    const contactListsResponse = await ac.api('contactLists', data)

    console.log("EXPRESS RESPONSE", contactListsResponse)
    res.status(201).json(contactListsResponse)
  } catch (err) {
    res.status(400).send(contactListsResponse)
  }
})

export default {
  path: "/api",
  handler: app
}
