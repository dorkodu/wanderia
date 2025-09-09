import { customAlphabet } from "nanoid"

const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz"
export const generateUsername = customAlphabet(alphabet, 16)
