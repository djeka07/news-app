import { isAfter, isBefore } from "~/common/models/helpers/date";
import { Authorization } from "./token";

export const isValid = (authorization?: Authorization): boolean => !!authorization && isBefore(authorization?.expires, Date.now())