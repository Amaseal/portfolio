export const load = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (!session) throw redirect(302, "/");
  return {};
};
