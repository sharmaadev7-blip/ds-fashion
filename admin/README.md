# STREETZ SEO Admin

This is a separate protected Next.js deployment; it does not alter the GitHub Pages storefront.

## Deploy
1. Import this repository into Vercel and set **Root Directory** to `admin`.
2. Create a PostgreSQL database (Supabase is recommended), copy `.env.example` to Vercel environment variables, then run `npx prisma migrate deploy`.
3. In Google Cloud, create OAuth credentials with the Vercel admin URL callback at `/api/auth/callback/google`; assign Search Console and GA4 access to the connected Google account.
4. Set `ADMIN_EMAILS` to the permitted admin accounts. Never put secrets in `NEXT_PUBLIC_*` variables.

The dashboard explicitly presents unavailable metrics until real provider connections are configured. It never fabricates search data.
