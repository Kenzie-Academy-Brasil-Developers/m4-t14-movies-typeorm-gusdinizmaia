import app from "./app";
import "dotenv/config";

const port = parseInt(process.env.APP_PORT!);

app.listen(port, () => {
  console.log("server is running");
});
