const axios = require('axios')

export default async (event, context) => {
  if (event.method === 'GET') {
    return new Response(`
      <html><body><form method="post" style="display: flex; flex-direction: column; max-width: 400px; gap: 4px;">
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="firstName" placeholder="first name" />
        <input type="text" name="lastName" placeholder="last name" />
        <input type="text" name="listId" value="1" />
        <button type="submit">Submit</button>
      </form></body></html>`, { status: 200, headers: { 'Content-Type': 'text/html' } });
  }

  try {
    const formData = event.headers.get('X-Form-Data') ? JSON.parse(event.headers.get('X-Form-Data')) : {};

    if (!formData.listId) {
      return new Response('listId is required', { status: 401 });
    }
  
    const listId = formData.listId ?? '1';
    const email = formData.email ?? '';
    const firstName = formData.firstName ?? '';
    const lastName = formData.lastName ?? '';
  
    const apiUrl = Netlify.env.get('ACTIVECAMPAIGN_API_URL');
    const apiKey = Netlify.env.get('ACTIVECAMPAIGN_API_KEY');

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
    // return new Response(JSON.stringify(err), { status: 400 });
  } finally {
    return new Response(JSON.stringify({ success: true, finally: true }), { status: 201 });
  }
}

export const config = {
  path: '/api/ac/subscribe',
};
