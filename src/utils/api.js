function _checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error${res.status}`);
}

const baseUrl =
  "https://my-json-server.typicode.com/Dalehemli/se_project_react ";

export const getItems = () => {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(_checkResponse);
};

export const addItems = ({ name, weather, link }) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      weather,
      link,
    }),
  }).then(_checkResponse);
};

export const deleteItems = (item) => {
  return fetch(`${baseUrl}/items/${item}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then(_checkResponse);
};
