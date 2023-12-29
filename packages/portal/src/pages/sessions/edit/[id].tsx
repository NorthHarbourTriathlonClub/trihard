import { useRouter } from 'next/router';
import { NavBarResponsive } from '@/components/NavBarResponsive';

const EditTrainingSession = () => {
  const { query } = useRouter();
  const { id } = query;
  return (
    <>
      <NavBarResponsive />
      <h1>EditTrainingSession</h1>
      <p>ID: {id}</p>
    </>
  );
};

export default EditTrainingSession;
