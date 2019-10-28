import config from "./config";

export default function getDBConfiguration() {
  // Default use sqlite
  if (!process.env.TYPEORM_CONNECTION) {
    return { ...config.DEFAULT_DB_CONFIG, ...config.DEFAULT_SQLITE };
  } else {
    // This is a common configuration
    let configuration:any = {
      type: process.env.TYPEORM_CONNECTION,
      synchronize: true
    };

    configuration = { ...config.DEFAULT_DB_CONFIG, ...configuration };

    if (configuration.type == config.DEFAULT_SQLITE.type) {
      configuration.database =
        process.env.TYPEORM_DATABASE || config.DEFAULT_SQLITE.database;
    } else if (configuration.type == config.DEFAULT_MONGODB.type) {
      // https://typeorm.io/#/connection-options/mongodb-connection-options
      configuration.url = process.env.TYPEORM_URL || config.DEFAULT_MONGODB.url;
      // Following set will overwrite parameters set from URL
      if (process.env.TYPEORM_HOST) {
        configuration.host = process.env.TYPEORM_HOST;
      }

      if (process.env.TYPEORM_PORT) {
        configuration.port = process.env.TYPEORM_PORT;
      }

      if (process.env.TYPEORM_DATABASE) {
        configuration.database = process.env.TYPEORM_DATABASE;
      }
    }

    return configuration;
  }
}

export function getDBType(){
  return process.env.TYPEORM_CONNECTION || config.DEFAULT_SQLITE.type;
}
