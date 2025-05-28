import type { IpoginationProps } from '../../model/types';
import PaginationButtons from '../PaginationButtons/PaginationButtons';

interface Props {
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
}

const Pagination = ({ top, bottom, children, ...paginationProps }: Props & IpoginationProps) => {
  return (
    <>
      {top && <PaginationButtons {...paginationProps} />}
      {children}
      {bottom && <PaginationButtons {...paginationProps} />}
    </>
  );
};

export default Pagination;
