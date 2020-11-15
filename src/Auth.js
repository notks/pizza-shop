const APP_NAME = "http://127.0.0.1:3000";
const loginPath = APP_NAME + "/login";
const homePath = APP_NAME + "/home";

class Auth {
  constructor() {
    this.checkAuth = async () => {
      if (localStorage.getItem("AuthState")) {
        await fetch("http://127.0.0.1:8000/api/authenticated", {
          headers: {
            Authorization: localStorage.getItem("Authorization"),
          },
        })
          .then((response) => response.json())
          .then((data) => {
            this.authState = true;
          })
          .catch((e) => {
            console.log(e);
            this.authState = false;
            document.location.href = loginPath;
          });
      } else {
        document.location.href = loginPath;
      }
      return this.authState;
    };
    this.login = async (email, password) => {
      if (this.authState) {
        document.location.href = homePath;
      }
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
    };
    this.logout = () => {
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
    };
    this.auth = async (setauthstate) => {
      let state = await this.checkAuth();
      setauthstate(state);
    };
  }
}

export default new Auth();
