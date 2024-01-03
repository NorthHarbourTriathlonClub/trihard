import { useRouter } from 'next/router';
import { NavBarResponsive } from '@/components/NavBarResponsive';

const EditAthletePage = () => {
  const { query } = useRouter();
  const id = query.id as string;
  return (
    <>
      <NavBarResponsive />
      <h1>EditAthletePage</h1>
      <p>ID: {id}</p>
    </>
  );
};

export default EditAthletePage;
