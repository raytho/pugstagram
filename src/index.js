import App from "./routes/index.svelte";

const app = new App({
  target: document.querySelector("main"),
});

export default app;
