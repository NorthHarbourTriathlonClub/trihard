import { useRouter } from 'next/router';

const EditTrainingSession = () => {
  const { query } = useRouter();
  const { id } = query;
  return (
    <>
      <h1>EditTrainingSession</h1>
      <p>ID: {id}</p>
    </>
  );
};

export default EditTrainingSession;
