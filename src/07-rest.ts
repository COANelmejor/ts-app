import { User, ROLES } from './01-enum';

const currentUser: User = {
  username: 'John',
  password: '123456',
  role: ROLES.ADMIN,
};

// Only check for admin role
export const checkAdminRole = (): boolean => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
};

const result = checkAdminRole();
console.log(result);

// Check for 2 roles
export const checkUserRole = (role1: string, role2: string): boolean => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role2) {
    return true;
  }

  return false;
};

const result2 = checkUserRole(ROLES.ADMIN, ROLES.SELLER);
console.log(result2);

// Check for n roles with array
export const checkUserRoleV2 = (roles: string[]): boolean => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

const result3 = checkUserRoleV2([ROLES.ADMIN, ROLES.SELLER]);
console.log(result3);

// Check for n roles with rest parameter
export const checkUserRoleV3 = (...roles: string[]): boolean => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

const result4 = checkUserRoleV3(ROLES.ADMIN, ROLES.SELLER);
console.log(result4);
