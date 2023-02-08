import { ACCESS_TOKEN, API_BASE_URL } from "../constants";

const request = (options) => {
  const headers = new Headers({
    "Content-Type": "application/json",
  });

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append(
      "Authorization",
      "Bearer " + localStorage.getItem(ACCESS_TOKEN)
    );
    console.log(headers);
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);
  console.log(options);
  return fetch(options.url, options).then((response) =>
    response.json().then((json) => {
      console.log(response);
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
  );
};

export function login(loginRequest) {
  return request({
    url: API_BASE_URL + "/auth/login",
    method: "POST",
    body: JSON.stringify(loginRequest),
  });
}

export function signup(signupRequest) {
  console.log(signupRequest);
  return request({
    url: API_BASE_URL + "/auth/register",
    method: "POST",
    body: JSON.stringify(signupRequest),
  });
}

export function checkUsernameAvailability(username) {
  return request({
    url: API_BASE_URL + "/user/checkUsernameAvailability?username=" + username,
    method: "GET",
  });
}

export function checkEmailAvailability(email) {
  return request({
    url: API_BASE_URL + "/user/checkEmailAvailability?email=" + email,
    method: "GET",
  });
}

export function getLogout() {
  localStorage.removeItem(ACCESS_TOKEN);
  return request({
    url: API_BASE_URL + "/auth/logout",
    method: "GET",
  });
}

export function getMovieById(id) {
  return request({
    url: "http://localhost:8080/api/watch?movieId=" + id,
    method: "GET",
  });
}

export function getCurrentUser() {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("No access token set.");
  }

  return request({
    url: API_BASE_URL + "/",
    method: "GET",
  });
}

export function getUserProfile(username) {
  return request({
    url: "/users/" + username,
    method: "GET",
  });
}
