const axios = require('axios')

export default async (event, context) => {
  const body = JSON.parse(event.body);
  
  const listId = body.listId
  const email = body.email;
  const firstName = body.firstName;
  const lastName = body.lastName;

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

    return new Response(JSON.stringify({ success: true, contactListsResponse }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ err, body }), { status: 400 });
  }
}

export const config = {
  path: '/api/ac/subscribe',
};
