import React from 'react';

export type SortOption = { label: string; value: string };
export type ViewMode = 'grid' | 'list';

export interface PageSortProps {
  title?: string;
  subtitle?: string; // e.g., About 9,620 results (0.62 seconds)
  resultsCount?: number; // used to auto-generate subtitle if subtitle not provided
  queryTimeSec?: number; // used to auto-generate subtitle if subtitle not provided
  perPageOptions?: number[];
  sortOptions?: SortOption[];
  viewModes?: ViewMode[];
  valuePerPage?: number;
  valueSort?: string;
  valueView?: ViewMode;
  onChangePerPage?: (n: number) => void;
  onChangeSort?: (value: string) => void;
  onChangeView?: (mode: ViewMode) => void;
  /** Optional combined change notifier */
  onChangeAll?: (state: { perPage: number; sort: string; view: ViewMode }) => void;
  className?: string;
  // Label customizations
  perPageLabel?: string;
  sortByLabel?: string;
  viewLabel?: string;
  // Visibility toggles
  showPerPage?: boolean;
  showSort?: boolean;
  showView?: boolean;
  // Slot classNames/styles for high customization
  titleClassName?: string;
  subtitleClassName?: string;
  controlsClassName?: string;
  selectClassName?: string;
  viewButtonClassName?: string;
  titleStyle?: React.CSSProperties;
  subtitleStyle?: React.CSSProperties;
  // Icon overrides
  gridIcon?: React.ReactNode;
  listIcon?: React.ReactNode;
}

export const PageSort: React.FC<PageSortProps> = ({
  title = 'Ecommerce Accesories & Fashion item',
  subtitle,
  resultsCount,
  queryTimeSec,
  perPageOptions = [12, 24, 36, 48],
  sortOptions = [
    { label: 'Best Match', value: 'match' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Newest', value: 'newest' },
  ],
  viewModes = ['grid', 'list'],
  valuePerPage,
  valueSort,
  valueView,
  onChangePerPage,
  onChangeSort,
  onChangeView,
  onChangeAll,
  className = '',
  perPageLabel = 'Per Page:',
  sortByLabel = 'Sort By:',
  viewLabel = 'View:',
  showPerPage = true,
  showSort = true,
  showView = true,
  titleClassName,
  subtitleClassName,
  controlsClassName,
  selectClassName,
  viewButtonClassName,
  titleStyle,
  subtitleStyle,
  gridIcon,
  listIcon,
}) => {
  const [perPage, setPerPage] = React.useState<number>(valuePerPage ?? perPageOptions[0]);
  const [sort, setSort] = React.useState<string>(valueSort ?? sortOptions[0]?.value);
  const [view, setView] = React.useState<ViewMode>(valueView ?? viewModes[0] ?? 'grid');

  React.useEffect(() => { if (valuePerPage !== undefined) setPerPage(valuePerPage); }, [valuePerPage]);
  React.useEffect(() => { if (valueSort !== undefined) setSort(valueSort); }, [valueSort]);
  React.useEffect(() => { if (valueView !== undefined) setView(valueView); }, [valueView]);

  const notifyAll = (next?: Partial<{ perPage: number; sort: string; view: ViewMode }>) => {
    onChangeAll?.({ perPage, sort, view, ...next } as any);
  };

  const handlePerPage = (n: number) => {
    if (valuePerPage === undefined) setPerPage(n);
    onChangePerPage?.(n);
    notifyAll({ perPage: n });
  };
  const handleSort = (v: string) => {
    if (valueSort === undefined) setSort(v);
    onChangeSort?.(v);
    notifyAll({ sort: v });
  };
  const handleView = (m: ViewMode) => {
    if (valueView === undefined) setView(m);
    onChangeView?.(m);
    notifyAll({ view: m });
  };

  const autoSubtitle = React.useMemo(() => {
    if (subtitle) return subtitle;
    if (typeof resultsCount === 'number' || typeof queryTimeSec === 'number') {
      const count = resultsCount?.toLocaleString() ?? '—';
      const t = queryTimeSec !== undefined ? queryTimeSec.toFixed(2) : '—';
      return `About ${count} results (${t} seconds)`;
    }
    return undefined;
  }, [subtitle, resultsCount, queryTimeSec]);

  return (
    <div className={`w-full bg-transparent ${className}`}>
      <div className="max-w-6xl mx-auto px-2 md:px-4">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div className="min-w-[240px]">
            <h2 className={`text-indigo-900 font-bold text-lg md:text-xl leading-tight ${titleClassName ?? ''}`} style={titleStyle}>{title}</h2>
            {autoSubtitle && <p className={`text-xs text-gray-500 mt-1 ${subtitleClassName ?? ''}`} style={subtitleStyle}>{autoSubtitle}</p>}
          </div>

          <div className={`flex items-center gap-6 text-sm text-gray-600 ${controlsClassName ?? ''}`}>
            {/* Per Page */}
            {showPerPage && (
              <div className="flex items-center gap-2">
                <span className="text-gray-500">{perPageLabel}</span>
                <select
                  className={`border border-gray-300 rounded px-2 py-1 text-gray-700 bg-white ${selectClassName ?? ''}`}
                  value={perPage}
                  onChange={(e) => handlePerPage(parseInt(e.target.value))}
                >
                  {perPageOptions.map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Sort By */}
            {showSort && (
              <div className="flex items-center gap-2">
                <span className="text-gray-500">{sortByLabel}</span>
                <select
                  className={`border border-gray-300 rounded px-2 py-1 text-gray-700 bg-white ${selectClassName ?? ''}`}
                  value={sort}
                  onChange={(e) => handleSort(e.target.value)}
                >
                  {sortOptions.map((s) => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
              </div>
            )}

            {/* View */}
            {showView && (
              <div className="flex items-center gap-2">
                <span className="text-gray-500">{viewLabel}</span>
                <div className="flex items-center gap-1">
                  {viewModes.includes('grid') && (
                    <button
                      type="button"
                      className={`w-8 h-8 rounded outline-none ${view === 'grid' ? 'ring-1 ring-indigo-500 text-indigo-600' : 'ring-0 text-gray-500'} ${viewButtonClassName ?? ''}`}
                      aria-label="Grid view"
                      onClick={() => handleView('grid')}
                    >
                      {gridIcon ?? (
                        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/></svg>
                      )}
                    </button>
                  )}
                  {viewModes.includes('list') && (
                    <button
                      type="button"
                      className={`w-8 h-8 rounded outline-none ${view === 'list' ? 'ring-1 ring-indigo-500 text-indigo-600' : 'ring-0 text-gray-500'} ${viewButtonClassName ?? ''}`}
                      aria-label="List view"
                      onClick={() => handleView('list')}
                    >
                      {listIcon ?? (
                        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/></svg>
                      )}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSort;


