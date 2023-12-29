import { useRouter } from 'next/router';
import { NavBarResponsive } from '@/components/NavBarResponsive';

const EditMemberPage = () => {
  const { query } = useRouter();
  const { id } = query;
  return (
    <>
      <NavBarResponsive />
      <h1>EditMemberPage</h1>
      <p>ID: {id}</p>
    </>
  );
};

export default EditMemberPage;
