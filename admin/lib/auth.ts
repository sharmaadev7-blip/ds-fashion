import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
const allowed = new Set((process.env.ADMIN_EMAILS ?? "").split(",").map(x=>x.trim()).filter(Boolean));
export const { handlers, auth } = NextAuth({ providers:[Google], callbacks:{ async signIn({user}) { return !!user.email && allowed.has(user.email); }, async authorized({auth}) { return !!auth?.user?.email && allowed.has(auth.user.email); } } });
export const requireAdmin = async () => { const session=await auth(); if (!session?.user?.email || !allowed.has(session.user.email)) throw new Error("Unauthorized"); return session; };
