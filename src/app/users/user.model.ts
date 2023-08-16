export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export interface User {
  id: number | string;
  username: string;
  role: ROLES;
}
