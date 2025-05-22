import { useState } from 'react';
import type { IFilters } from '../../interfaces';

export const useFilters = (initialFilters: IFilters) => {
  const [filters, setFilters] = useState<IFilters>(initialFilters);
  //Для примитивов не обязательно указывать, а для рбъектов желательно указать.
  const chancgeFilter = (key: string, value: string | number | null) => {
    setFilters(prev => {
      return { ...prev, [key]: value };
    });
  };
  return { filters, chancgeFilter }; //динамически сам всё просчитал
};
