import { EventEmitter } from "fbemitter";

export enum EVENTS {
  OPEN_MODAL = "OPEN_MODAL",
  CLOSE_MODAL = "CLOSE_MODAL",
}

// instancia de EventEmitter
export const appEmitter = new EventEmitter();
