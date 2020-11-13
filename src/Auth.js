//import {useHistory} from 'react-router-dom';
const loginPath = "http://127.0.0.1:3000/login";
//const registerPath = "http://127.0.0.1:3000/register";
const homePath = "http://127.0.0.1:3000/home";
//const history=useHistory();

const Auth = {
  checkAuth: async () => {
    if (localStorage.getItem("AuthState")) {
      console.log("logedin");
      await fetch("http://127.0.0.1:8000/api/authenticated", {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          document.location.href = "http://127.0.0.1:3000/login";
          //history.pushState('/login')
        });
    } else {
      document.location.href = "http://127.0.0.1:3000/login";
    }
  },

  login: async (email, password) => {
    let msg = "";
    await fetch("http://127.0.0.1:8000/api/user/login", {
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
        } else {
          localStorage.setItem("Authorization", `Bearer ${data.token}`);
          localStorage.setItem("AuthState", true);
          return (document.location.href = homePath);
        }
      })
      .catch((e) => console.log(e));
    return msg;
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
        localStorage.removeItem("Authorization");
        localStorage.removeItem("AuthState");

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
export default Auth;
