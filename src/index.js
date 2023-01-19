import app from "./app.js";
import aencRoutes from "./routes/ordenes.routes.js";

app.listen(app.get("port"));
app.use(aencRoutes);
console.log("Servidor puerto: ", app.get("port"));