export interface ISession {
  id: string;
  userId: string;
  createdAt: string;
  expiresAt: string;

  selector: Buffer;
  validator: Buffer;
}
