self.addEventListener("load", (e) => {
  console.log("SW loaded!");
});

self.addEventListener("install", (e) => {
  console.log("SW installed!");
});
//console.log(navigator);
self.addEventListener("activate", (e) => {
  console.log("SW activated!!");
});
self.addEventListener("fetch", (e) => {
  console.log("SW intercepted fetch!!");
});
