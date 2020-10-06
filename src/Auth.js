const loginPath = "http://127.0.0.1:3000/login";
const registerPath = "http://127.0.0.1:3000/register";
const homePath = "http://127.0.0.1:3000/home";

const Auth = {
  checkAuth: () => {},

  login: (email, password) => {
    let msg = "";
    fetch("http://127.0.0.1:8000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          msg = data.message;
        }
        localStorage.setItem("Authorization", `Bearer ${data.token}`);
        return (document.location.href = homePath);
      })
      .catch((e) => console.log(e));
  },
  logout: () => {
    fetch("http://127.0.0.1:8000/api/user/logout", {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    })
      .then((data) => {
        console.log("You are logged out!");
        localStorage.setItem("Authorization", null);
        document.location.href = loginPath;
      })
      .catch((e) => {
        console.log("You are unauthenticated!");
      });
  },
  protectedRoute: () => {
    fetch("http://127.0.0.1:8000/api/user/authenticated", {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("Authorization")),
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
};

module.exports = Auth;
