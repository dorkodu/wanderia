import { Elysia } from "elysia";
import { auth } from "./service";

export const authEndpoints = new Elysia({ prefix: "/auth" }).mount(auth.handler);