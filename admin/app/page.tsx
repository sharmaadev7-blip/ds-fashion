import { db } from "@/lib/db";

type IntegrationStatusRecord = { status: string };

export default async function Dashboard() {
  const [pages, integrations] = await Promise.all([db.seoPage.count(), db.integration.findMany()]);
  const connected = integrations.filter((integration: IntegrationStatusRecord) => integration.status === "CONNECTED").length;

  return <main><aside><b>STREETZ</b><span>SEO ADMIN</span><nav>Overview<br/>SEO Pages<br/>Keywords<br/>Technical Audit<br/>Integrations<br/>Activity</nav></aside><section><p className="label">SYSTEM / OVERVIEW</p><h1>Search presence,<br/>under control.</h1><div className="notice">{connected ? `${connected} live integration${connected > 1 ? "s" : ""} connected.` : "Live Google data unavailable — connect Search Console or GA4 to begin syncing."}</div><div className="metrics"><article><small>SEO pages</small><strong>{pages}</strong><em>Stored in database</em></article><article><small>Organic clicks</small><strong>—</strong><em>Search Console not connected</em></article><article><small>Index status</small><strong>—</strong><em>Run an audit after setup</em></article></div><div className="panel"><h2>Launch checklist</h2><ol><li>Deploy this <code>admin/</code> directory to Vercel.</li><li>Configure PostgreSQL and run Prisma migrations.</li><li>Add authorized admin email addresses and Google OAuth credentials.</li><li>Connect Search Console and GA4; live values will then be sourced from those services.</li></ol></div></section></main>;
}

