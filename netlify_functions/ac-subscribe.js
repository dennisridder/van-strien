const axios = require('axios')

export default async (req, context) => {
  const listId = req.headers.get('listId');
  const email = req.headers.get('email');
  const firstName = req.headers.get('firstName');
  const lastName = req.headers.get('lastName');
  const apiUrl = Netlify.env.get('ACTIVECAMPAIGN_API_URL');
  const apiKey = Netlify.env.get('ACTIVECAMPAIGN_API_KEY');

  try {
    let contactObject = {
      "contact": {
          "email": email,
          "firstName": firstName,
          "lastName": lastName,
          "phone": '',
      }
    };
    const response = await axios.post(
      `${apiUrl}/api/3/contact/sync`,
        contactObject,
        {
          headers: {
            'Api-Token': apiKey,
          }
        }
    );

    const contactId = response.data.contact.id
    const contactList = {
      contactList: {
          list: listId,
          contact: contactId,
          status: 1
      }
    }

    const contactListsResponse = await axios.post(
      `${apiUrl}/api/3/contactLists`,
        contactList,
        {
          headers: {
            'Api-Token': apiKey,
          }
        }
    );

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
    return new Response({ success: true, contactListsResponse }, { status: 201 });
  } catch (err) {
    return new Response({ err }, { status: 400 });
  }
}

export const config = {
  path: '/api/ac/subscribe',
};
