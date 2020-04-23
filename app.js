import router from "./router.js";

// import home from "./routes/home.js";
import signUp from "./routes/signup.js";
// import logIn from "./routes/login.js";
import missing from "./routes/missing.js";
// import newPokemon from "./routes/new-pokemon.js";
// import yourPokemon from "./routes/your-pokemon.js";

const app = router();

// app.get("/", home); // Home (see all pokemon)
app.get("/sign-up", signUp);
// app.get("/log-in", logIn);
app.get("default", missing);
// app.get("/new-pokemon", newPokemon);
// app.get("your-pokemon", yourPokemon);

app.listen();