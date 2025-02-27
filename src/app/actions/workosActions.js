"use server";
const { WorkOS } = require("@workos-inc/node");

const workos = new WorkOS(process.env.WORKOS_API_KEY);
export async function createComapny() {
  await workos.organizations.createOrganization({ name: data.get("newCompanyName") });
}
