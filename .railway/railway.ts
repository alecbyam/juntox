import { defineRailway, github, postgres, preserve, project, service, volume } from "railway/iac";

export default defineRailway(() => {
  const repo = github("alecbyam/juntox");

  const Postgres = postgres("Postgres");
  const postgresVolume = volume("postgres-volume", {
    alerts: { usage: { "100": {}, "80": {}, "95": {} } },
    allowOnlineResize: true,
    region: "us-east4-eqdc4a",
    sizeMB: 5000,
  });

  const backendService = service("juntox", {
    source: repo,
    replicas: 1,
    env: {
      ALLOWED_ORIGINS: preserve(),
      DATABASE_URL: preserve(),
      JWT_SECRET_KEY: preserve(),
      NEXT_PUBLIC_API_URL: preserve(),
    },
  });

  const frontendService = service("frontend", {
    source: repo,
    replicas: 1,
    env: {
      NEXT_PUBLIC_API_URL: preserve(),
      NEXT_PUBLIC_SITE_URL: preserve(),
    },
  });

  return project("celebrated-youthfulness", {
    resources: [backendService, frontendService, Postgres, postgresVolume],
  });
});
