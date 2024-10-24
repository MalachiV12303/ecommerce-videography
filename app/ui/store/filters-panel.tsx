'use client';

import { useRouter } from 'next/navigation';
import { useOptimistic, useTransition } from 'react';
import clsx from 'clsx';

export default function FiltersPanel({ filters }: { filters: string[]; }) {
  const CAMERATYPEFILTERS = ["DSLR", "Mirrorless"];
  const BRANDFILTERS = ["Canon", "Nikon", "Sony", "Panasonic"];

  const router = useRouter();
  const [activeFilters, setActiveFilters] = useOptimistic(filters);
  const [isPending, startTransition] = useTransition();

  function updateFilters(filters: string[]) {
    const newParams = new URLSearchParams(
      filters.map((filter) => ["filter", filter])
    );
    startTransition(() => {
      setActiveFilters(filters);
      router.push(`?${newParams}`);
    });
  }

  function FilterSet({ e }: { e: string[]; }){
    return(
      <div>
        {e}
      </div>
    )
  }

  
  return (
    <div className="mt-4" data-pending={isPending ? "" : undefined}>
      <div className="flex-col sm:block">
        <p>type</p>
        {CAMERATYPEFILTERS.map((filter) => (
          <label
            key={filter}
            className={clsx(
              'ml-2 p-1 flex gap-2 items-center whitespace-nowrap',
              {
                'line-through opacity-50': activeFilters.includes(filter),
              }
            )}>
            <input
              checked={activeFilters.includes(filter)}
              onChange={(e) => {
                const { name, checked } = e.target;
                const newFilters = checked
                  ? [...activeFilters, name]
                  : activeFilters.filter((g) => g !== name);
                updateFilters(newFilters);
              }}
              name={filter}
              type="checkbox"
              className="hidden"
            />
            {filter}
          </label>
        ))}
        <p>brand</p>
        {BRANDFILTERS.map((filter) => (
          <label
            key={filter}
            className={clsx(
              'ml-2 p-1 flex gap-2 items-center whitespace-nowrap',
              {
                'line-through opacity-50': activeFilters.includes(filter),
              }
            )}>
            <input
              checked={activeFilters.includes(filter)}
              onChange={(e) => {
                const { name, checked } = e.target;
                const newFilters = checked
                  ? [...activeFilters, name]
                  : activeFilters.filter((g) => g !== name);
                updateFilters(newFilters);
              }}
              name={filter}
              type="checkbox"
              className="hidden"
            />
            {filter}
          </label>
        ))}
      </div>
    </div>
  );
}
