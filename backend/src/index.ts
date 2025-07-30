import 'dotenv/config';
import express from "express";
import userRouter from "./routers/users"
import workerRouter from "./routers/worker"
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors())

app.use("/v1/user", userRouter);
app.use("/v1/worker", workerRouter);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});