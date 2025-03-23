var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// netlify_functions/ac-subscribe.js
var ac_subscribe_exports = {};
__export(ac_subscribe_exports, {
  config: () => config,
  default: () => ac_subscribe_default
});
module.exports = __toCommonJS(ac_subscribe_exports);
var axios = require("axios");
var ac_subscribe_default = async (event, context) => {
  if (event.method === "GET") {
    return new Response(`
      <html><body><form method="post" style="display: flex; flex-direction: column; max-width: 400px; gap: 4px;">
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="firstName" placeholder="first name" />
        <input type="text" name="lastName" placeholder="last name" />
        <input type="text" name="listId" value="1" />
        <button type="submit">Submit</button>
      </form></body></html>`, { status: 200, headers: { "Content-Type": "text/html" } });
  }
  try {
    const body = JSON.parse(event.body);
    const listId = body.listId ?? "1";
    const email = body.email ?? "";
    const firstName = body.firstName ?? "";
    const lastName = body.lastName ?? "";
    const apiUrl = Netlify.env.get("ACTIVECAMPAIGN_API_URL");
    const apiKey = Netlify.env.get("ACTIVECAMPAIGN_API_KEY");
    let contactObject = {
      "contact": {
        "email": email,
        "firstName": firstName,
        "lastName": lastName,
        "phone": ""
      }
    };
    const response = await axios.post(
      `${apiUrl}/api/3/contact/sync`,
      contactObject,
      {
        headers: {
          "Api-Token": apiKey
        }
      }
    );
    const contactId = response.data.contact.id;
    const contactList = {
      contactList: {
        list: listId,
        contact: contactId,
        status: 1
      }
    };
    const contactListsResponse = await axios.post(
      `${apiUrl}/api/3/contactLists`,
      contactList,
      {
        headers: {
          "Api-Token": apiKey
        }
      }
    );
    return new Response(JSON.stringify({ success: true, contactListsResponse }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ err }), { status: 400 });
  }
};
var config = {
  path: "/api/ac/subscribe"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  config
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeV9mdW5jdGlvbnMvYWMtc3Vic2NyaWJlLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGV2ZW50LCBjb250ZXh0KSA9PiB7XG4gIGlmIChldmVudC5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShgXG4gICAgICA8aHRtbD48Ym9keT48Zm9ybSBtZXRob2Q9XCJwb3N0XCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBtYXgtd2lkdGg6IDQwMHB4OyBnYXA6IDRweDtcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJlbWFpbFwiIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJmaXJzdE5hbWVcIiBwbGFjZWhvbGRlcj1cImZpcnN0IG5hbWVcIiAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGFzdE5hbWVcIiBwbGFjZWhvbGRlcj1cImxhc3QgbmFtZVwiIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsaXN0SWRcIiB2YWx1ZT1cIjFcIiAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT48L2JvZHk+PC9odG1sPmAsIHsgc3RhdHVzOiAyMDAsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L2h0bWwnIH0gfSk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGJvZHkgPSBKU09OLnBhcnNlKGV2ZW50LmJvZHkpO1xuICAgIC8vIGNvbnN0IGJvZHkgPSB7fTtcblxuICAgIC8vIGNvbnNvbGUubG9nKCdyZXF1ZXN0JywgZXZlbnQpO1xuICAgIC8vIHJldHVybiBuZXcgUmVzcG9uc2UoJycpO1xuICBcbiAgICBjb25zdCBsaXN0SWQgPSBib2R5Lmxpc3RJZCA/PyAnMSc7XG4gICAgY29uc3QgZW1haWwgPSBib2R5LmVtYWlsID8/ICcnO1xuICAgIGNvbnN0IGZpcnN0TmFtZSA9IGJvZHkuZmlyc3ROYW1lID8/ICcnO1xuICAgIGNvbnN0IGxhc3ROYW1lID0gYm9keS5sYXN0TmFtZSA/PyAnJztcbiAgXG4gICAgY29uc3QgYXBpVXJsID0gTmV0bGlmeS5lbnYuZ2V0KCdBQ1RJVkVDQU1QQUlHTl9BUElfVVJMJyk7XG4gICAgY29uc3QgYXBpS2V5ID0gTmV0bGlmeS5lbnYuZ2V0KCdBQ1RJVkVDQU1QQUlHTl9BUElfS0VZJyk7XG5cbiAgICBsZXQgY29udGFjdE9iamVjdCA9IHtcbiAgICAgIFwiY29udGFjdFwiOiB7XG4gICAgICAgICAgXCJlbWFpbFwiOiBlbWFpbCxcbiAgICAgICAgICBcImZpcnN0TmFtZVwiOiBmaXJzdE5hbWUsXG4gICAgICAgICAgXCJsYXN0TmFtZVwiOiBsYXN0TmFtZSxcbiAgICAgICAgICBcInBob25lXCI6ICcnLFxuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgYCR7YXBpVXJsfS9hcGkvMy9jb250YWN0L3N5bmNgLFxuICAgICAgICBjb250YWN0T2JqZWN0LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0FwaS1Ub2tlbic6IGFwaUtleSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc3QgY29udGFjdElkID0gcmVzcG9uc2UuZGF0YS5jb250YWN0LmlkXG4gICAgY29uc3QgY29udGFjdExpc3QgPSB7XG4gICAgICBjb250YWN0TGlzdDoge1xuICAgICAgICAgIGxpc3Q6IGxpc3RJZCxcbiAgICAgICAgICBjb250YWN0OiBjb250YWN0SWQsXG4gICAgICAgICAgc3RhdHVzOiAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29udGFjdExpc3RzUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgYCR7YXBpVXJsfS9hcGkvMy9jb250YWN0TGlzdHNgLFxuICAgICAgICBjb250YWN0TGlzdCxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBcGktVG9rZW4nOiBhcGlLZXksXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBzdWNjZXNzOiB0cnVlLCBjb250YWN0TGlzdHNSZXNwb25zZSB9KSwgeyBzdGF0dXM6IDIwMSB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVyciB9KSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBwYXRoOiAnL2FwaS9hYy9zdWJzY3JpYmUnLFxufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFNLFFBQVEsUUFBUSxPQUFPO0FBRTdCLElBQU8sdUJBQVEsT0FBTyxPQUFPLFlBQVk7QUFDdkMsTUFBSSxNQUFNLFdBQVcsT0FBTztBQUMxQixXQUFPLElBQUksU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQU9NLEVBQUUsUUFBUSxLQUFLLFNBQVMsRUFBRSxnQkFBZ0IsWUFBWSxFQUFFLENBQUM7QUFBQSxFQUNyRjtBQUVBLE1BQUk7QUFDRixVQUFNLE9BQU8sS0FBSyxNQUFNLE1BQU0sSUFBSTtBQU1sQyxVQUFNLFNBQVMsS0FBSyxVQUFVO0FBQzlCLFVBQU0sUUFBUSxLQUFLLFNBQVM7QUFDNUIsVUFBTSxZQUFZLEtBQUssYUFBYTtBQUNwQyxVQUFNLFdBQVcsS0FBSyxZQUFZO0FBRWxDLFVBQU0sU0FBUyxRQUFRLElBQUksSUFBSSx3QkFBd0I7QUFDdkQsVUFBTSxTQUFTLFFBQVEsSUFBSSxJQUFJLHdCQUF3QjtBQUV2RCxRQUFJLGdCQUFnQjtBQUFBLE1BQ2xCLFdBQVc7QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULGFBQWE7QUFBQSxRQUNiLFlBQVk7QUFBQSxRQUNaLFNBQVM7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUNBLFVBQU0sV0FBVyxNQUFNLE1BQU07QUFBQSxNQUMzQixHQUFHLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLFFBQ0UsU0FBUztBQUFBLFVBQ1AsYUFBYTtBQUFBLFFBQ2Y7QUFBQSxNQUNGO0FBQUEsSUFDSjtBQUVBLFVBQU0sWUFBWSxTQUFTLEtBQUssUUFBUTtBQUN4QyxVQUFNLGNBQWM7QUFBQSxNQUNsQixhQUFhO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsTUFDWjtBQUFBLElBQ0Y7QUFFQSxVQUFNLHVCQUF1QixNQUFNLE1BQU07QUFBQSxNQUN2QyxHQUFHLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLFFBQ0UsU0FBUztBQUFBLFVBQ1AsYUFBYTtBQUFBLFFBQ2Y7QUFBQSxNQUNGO0FBQUEsSUFDSjtBQUVBLFdBQU8sSUFBSSxTQUFTLEtBQUssVUFBVSxFQUFFLFNBQVMsTUFBTSxxQkFBcUIsQ0FBQyxHQUFHLEVBQUUsUUFBUSxJQUFJLENBQUM7QUFBQSxFQUM5RixTQUFTLEtBQUs7QUFDWixXQUFPLElBQUksU0FBUyxLQUFLLFVBQVUsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsSUFBSSxDQUFDO0FBQUEsRUFDOUQ7QUFDRjtBQUVPLElBQU0sU0FBUztBQUFBLEVBQ3BCLE1BQU07QUFDUjsiLAogICJuYW1lcyI6IFtdCn0K
