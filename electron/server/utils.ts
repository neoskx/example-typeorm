import { getDBType } from "./dbConfiguration";
import config from "./config";

export function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
      );
    });
  });
}

export function isMongo(){
  if (getDBType() === config.DEFAULT_MONGODB.type) {
      return true;
  }

  return false;
}

export function isSQLite(){
  if (getDBType() === config.DEFAULT_SQLITE.type) {
      return true;
  }

  return false;
}