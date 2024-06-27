import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';

import {
  Option,
  SieveValue,
  TableOfContentsItemType,
} from '@equinor/amplify-components';

import { ReleaseNote } from 'src/api/models/ReleaseNote';
import { useReleaseNotesQuery } from 'src/hooks/useReleaseNotesQuery';
import {
  extractDatesFromReleaseNotes,
  sortReleaseNotesByDate,
} from 'src/utils/releaseNotes';

interface ReleaseNotesContextState {
  search: SieveValue;
  setSearch: Dispatch<SetStateAction<SieveValue>>;
  selectedReleaseNoteTypes?: Option[];
  open: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
  filteredData: ReleaseNote[];
  releaseNotesYears: TableOfContentsItemType[];
}

const defaultSearchState: SieveValue = {
  filterValues: undefined,
  searchValue: undefined,
  sortValue: undefined,
};

const ReleaseNotesContext = createContext<ReleaseNotesContextState | undefined>(
  undefined
);

export const useReleaseNotes = (): ReleaseNotesContextState => {
  const context = useContext(ReleaseNotesContext);
  if (context === undefined) {
    throw new Error(
      'useReleaseNotes must be used within a ReleaseNotesProvider'
    );
  }
  return context;
};

interface ReleaseNotesContextProviderProps {
  children: ReactNode;
  enabled?: boolean;
}

const ReleaseNotesProvider: FC<ReleaseNotesContextProviderProps> = ({
  children,
  enabled,
}) => {
  const { data } = useReleaseNotesQuery({ enabled });
  const [search, setSearch] = useState<SieveValue>(defaultSearchState);
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((previous) => !previous);
  };

  const releaseNotesYears = useMemo(
    () => extractDatesFromReleaseNotes(data ?? []),
    [data]
  );

  const selectedReleaseNoteTypes = search.filterValues?.Type;

  const filteredData = useMemo(() => {
    let filteredList = data ?? [];

    if (selectedReleaseNoteTypes && selectedReleaseNoteTypes.length > 0) {
      filteredList = filteredList.filter((item) =>
        item.tags?.some((tag) =>
          selectedReleaseNoteTypes
            .map((option: Option) => option.value)
            .includes(tag)
        )
      );
    }

    if (search?.searchValue && search?.searchValue?.trim() !== '') {
      const searchTerms = search.searchValue.trim().toLowerCase().split(' ');
      filteredList = filteredList.filter((item) => {
        return Object.values(item)
          .join(' ')
          .toLowerCase()
          .includes(searchTerms.join(' '));
      });
    }
    sortReleaseNotesByDate(filteredList);

    return filteredList;
  }, [data, search.searchValue, selectedReleaseNoteTypes]);

  const contextValue: ReleaseNotesContextState = {
    search,
    setSearch,
    selectedReleaseNoteTypes,
    open,
    setOpen,
    toggle,
    filteredData,
    releaseNotesYears,
  };

  return (
    <ReleaseNotesContext.Provider value={contextValue}>
      {children}
    </ReleaseNotesContext.Provider>
  );
};

export default ReleaseNotesProvider;
