import { str, envsafe, port, url } from "envsafe";

export const env = envsafe({
  PORT: port({
    devDefault: 4501,
    desc: "The port the app is running on",
    example: 80,
  }),
  NODE_ENV: str({
    devDefault: "development",
    choices: ["development", "production"],
  }),

  // endpoint
  ENDPOINT: url(),
});
