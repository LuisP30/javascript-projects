import app from "./app";

const port = 3001

app.listen(port, () => {
  console.log(`CTRL + Click: http://127.0.0.1:${port}`)
})
