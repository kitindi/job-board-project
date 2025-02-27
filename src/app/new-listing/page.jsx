"use server";
import { withAuth } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";
import { createCompany } from "@/app/actions/workosActions";

const NewListingPage = async () => {
  const { user } = await withAuth();
  const workos = new WorkOS(process.env.WORKOS_API_KEY);
  const organizationMembership = await workos.userManagement.listOrganizationMemberships({
    userId: user.id,
  });

  if (!user) {
    return <div className="container">You need to be logged in to post a job</div>;
  }

  return (
    <div className="container">
      <pre> {JSON.stringify(organizationMembership, null, 2)}</pre>
      <div>
        <div>
          <h2 className="text-lg mb-2 mt-6">Your companies</h2>
          <p className="text-gray-500 text-sm mb-2">Select a company</p>
          <div className="border border-blue-200 bg-blue-50 rounded-md p-4">No companies found assigned to your user</div>
        </div>
        <h2 className="text-lg mt-6 mb-2">Create a new company</h2>
        <p className="text-gray-500 text-sm mb-2">To create a job you need first to register a company</p>
        <form action={createCompany} className="mb-2 flex gap-2">
          <input type="text" name="newCompanyName" placeholder="company name" className="border border-gray-300 rounded-md px-2 py-1.5" />

          <button type="submit" className="text-slate-700 bg-gray-200 px-4 py-2 rounded-md flex items-center gap-2">
            Create company{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewListingPage;
