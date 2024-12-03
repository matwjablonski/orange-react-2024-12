import { useParams } from 'react-router';

export const BookDetails = () => {
  const { id } = useParams();
  return (
    <div>
      szczegóły dla książki o id: {id}
    </div>
  );
}
