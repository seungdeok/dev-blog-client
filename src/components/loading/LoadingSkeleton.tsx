import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface Props {
  count?: number;
  styles: { [key: string]: string | number };
}

export const LoadingSkeleton = ({ count, styles }: Props) => {
  return <Skeleton count={count || 1} style={styles} />;
};
