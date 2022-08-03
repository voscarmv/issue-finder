import fetch from 'node-fetch';
// Api calls to github https://docs.github.com/en/rest/issues/issues

// fetchIssues('org/repo', 'filters');

export default  async function sieveIssues(organizationRepository, requestFilters) {
  const getAppointment = await fetch(
    `https://api.github.com/repos/${organizationRepository}/${requestFilters}`,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    },
  );

  if (getAppointment.status !== 200) {
    throw getAppointment.statusText;
  }

  return getAppointment;
}
