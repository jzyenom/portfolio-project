// utils/requireAdmin.ts
export function requireAdmin() {
  if (typeof window !== "undefined") {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      window.location.href = "/unauthorized";
    }
  }
}
// export function isAdmin() {
//   if (typeof window !== "undefined") {
//     const role = localStorage.getItem("role");
//     return role === "admin";
//   }
//   return false;
// }