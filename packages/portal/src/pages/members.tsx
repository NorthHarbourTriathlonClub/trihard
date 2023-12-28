// import { api } from '@/utils/api';

import { NavBarResponsive } from '@/components/NavBarResponsive';

const Members = () => {
  // const { data, isLoading, isError } = api.memberRoutes.findMany.useQuery({
  //   take: 10,
  // });
  return (
    <>
      <NavBarResponsive />
      <p>MembersPage</p>
      {/* <h1>Members Page</h1>
      <p>isLoading: {isLoading}</p>
      <p>isError: {isError}</p>
      <p>Data: {JSON.stringify(data)}</p> */}
    </>
  );
};

export default Members;
