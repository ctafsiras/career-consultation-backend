import app from "./app";
const port = Number(process.env.PORT) | 5000;

const main = async () => {
  try {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log("Error starting server");
  }
};

main();
