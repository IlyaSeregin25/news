import type { IpoginationProps } from '../../interfaces';
import Pagination from '../Pagination/Pagination';
import type React from 'react';

interface Props {
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
}

const PaginationWrapper = ({ top, bottom, children, ...paginationProps }: Props & IpoginationProps) => {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
};

export default PaginationWrapper;
