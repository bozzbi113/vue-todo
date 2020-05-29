function objectToQueryString(params = {}) {
  let url = "";
  Object.keys(params).map((key, i) => {
    if (!params[key]) return;
    if (i != 0) {
      url += "&";
    }
    url += `${key}=${params[key]}`;
  });
  return url;
  // convert object to query params if method = GET
}
function formatParams(params = {}) {
  return "";
  //validate + format params if method = POST
}
async function request(url = "", payload, method = "GET", headers = {}) {
  // const { headers = {}, params = {} } = payload || {};
  const urlBase = "http://localhost:3000";
  url = urlBase + url;
  const options = {
    method,
    headers: {
      Authorization: "",
      Accept: "application/json",
      "Content-Type": "application/json",
      ...headers
    }
  };
  if (method === "GET") {
    url += "?" + objectToQueryString(payload);
  } else {
    options.body = JSON.stringify(payload);
  }
  const response = await fetch(url, options);
  // handle response
  const resp = await response.json();
  if (response.status === 401) {
    // handleUnAuthorize(); // handle error
  }
  if (response.status >= 200 && response.status <= 300) {
    return resp;
  }
  throw {
    http_status: response.status,
    error: { ...resp }
  };
}

export default {
  get(url, payload, header) {
    return request(url, payload, header);
  },
  post(url, payload, header) {
    return request(url, payload, "POST", header);
  },
  put(url, payload, header) {
    return request(url, payload, "PUT", header);
  },
  delete(url, payload, header) {
    return request(url, payload, "DELETE", header);
  }
};
