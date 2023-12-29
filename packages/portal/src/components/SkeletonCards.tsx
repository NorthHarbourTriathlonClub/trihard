import { SkeletonCard } from '@/components/SkeletonCard';

export type SkeletonCardsProps = {
  count: number;
};
export const SkeletonCards = (props: SkeletonCardsProps) => {
  const { count } = props;
  if (count === 0 || count === undefined) return <SkeletonCard />;
  return [...Array(count)].map((n, _i) => <SkeletonCard key={`${_i}-${n}`} />);
};
