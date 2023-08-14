export enum ROLES {
    ADMIN = "admin",
    SELLER = "seller",
    CUSTOMER = "customer"
}

export type User ={
  username: string,
  password: string,
  role: ROLES
}

const nicoUser: User = {
  username: "nico",
  password: "1234",
  role: ROLES.ADMIN
}
