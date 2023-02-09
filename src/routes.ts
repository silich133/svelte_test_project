import Home from "./components/screens/home/Home.svelte";
import NotFound from "./components/screens/NotFound.svelte";
import Restaurant from "./components/screens/restaurant/Restaurant.svelte";

export const routes = {
  "/": Home,
  "/company/:name": Restaurant,
  "*": NotFound,
};
