export type Role = "tenant" | "admin" | "super-admin";

export const mockUser = {
  isLoggedIn: true,
  role: "super-admin" as Role,
};
