const bodyParser = require("body-parser")
// const { resolveConfig } = require('prettier');
const app = require("express")()
// const request = require('request');
const axios = require("axios")

app.use(bodyParser.json())
app.all("/test", (req, res) => {
  res.json({ data: "blabla" })
})

app.post("/subscribe", async (req, res) => {
  const { listId } = req.body
  try {
    let contactObject = {
      contact: {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: ""
      }
    }
    const response = await axios.post(
      `${process.env.ACTIVECAMPAIGN_API_URL}/api/3/contact/sync`,
      contactObject,
      {
        headers: {
          "Api-Token": process.env.ACTIVECAMPAIGN_API_KEY
        }
      }
    )

    // const response = await ac.api('contact/sync', { contact: req.body })
    // console.log("contact/sync postdata", { contact: req.body })
    console.log("contact/sync response", response)

    const contactId = response.data.contact.id
    const contactList = {
      contactList: {
        list: listId,
        contact: contactId,
        status: 1
      }
    }

    // console.log("contact/sync contact", contact);
    // console.log("contact/sync response", response);

    // // const contactListsResponse = await ac.api('contactLists', contactList)
    // const contactListsResponse = await axios.post(
    //   `${process.env.ACTIVECAMPAIGN_API_URL}/api/3/contactLists`,
    //     contactList,
    //     {
    //       headers: {
    //         "Api-Token" : process.env.ACTIVECAMPAIGN_API_KEY
    //       }
    //     }
    // );

    // console.log("EXPRESS RESPONSE", contactListsResponse)
    // res.status(201).json(contactListsResponse)
    res.status(201).json({ success: true })
  } catch (err) {
    console.log("contact/sync error", err)
    res.status(400).send(err)
  }
})

module.exports = app
