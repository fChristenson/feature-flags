import express from "express";
import * as path from "path";
import { featureFlagService } from "./libs";

export const app = express();

app.use(express.json());

const distDir = path.resolve(__dirname, "..", "dist");

app.use(express.static(distDir));

app.get("/features", async (req, res) => {
  const flags = await featureFlagService.getFeatureFlags();
  res.json(flags);
});

app.put("/features", async (req, res) => {
  const flags = await featureFlagService.setFeatureFlags(req.body);
  res.json(flags);
});

app.all("*", (req: express.Request, res: express.Response) => {
  res.sendFile(path.resolve(distDir, "view.html"));
});
