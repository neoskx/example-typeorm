/**
 * Created by Shaoke Xu on 4/29/18.
 */
import "reflect-metadata";
const typeorm = require("typeorm");
const enableDestroy = require("server-destroy");
const createApp = require("./app");
import config from "./config";
import getDBConfiguration from './dbConfiguration';

export default async function startServer() {
  await new Promise((resolve, reject) => {
    const dbConfig = getDBConfiguration();
    console.log('dbConfig:', dbConfig);
    typeorm
      .createConnection(dbConfig)
      .then(async connection => {
        const app = await createApp();
        const server = app.listen(config.PORT, function() {
          console.info(
            "Express server listening on http://localhost:%d/ in %s mode",
            config.PORT,
            app.get("env")
          );
          resolve(true);
        });

        enableDestroy(server);

        function closeServer(signal) {
          console.info(`${signal} received`);
          console.info("Closing http.Server ..");
          server.destroy();
        }

        // Handle signals gracefully. Heroku will send SIGTERM before idle.
        process.on("SIGTERM", closeServer.bind(this, "SIGTERM"));
        process.on("SIGINT", closeServer.bind(this, "SIGINT(Ctrl-C)"));

        server.on("close", () => {
          console.info("Server closed");
          // process.emit("cleanup");

          console.info("Giving 100ms time to cleanup..");
          // Give a small time frame to clean up
          setTimeout(process.exit, 100);
        });
      })
      .catch(err => {
        console.error("Create DB Connection fail. Error: ", err);
        reject(err);
      });
  });
}
