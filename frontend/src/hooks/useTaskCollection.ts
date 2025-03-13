import { useLocalStorage } from "usehooks-ts";

import { ColumnType, TaskType } from "../types/types";

function useTaskCollection() {
  return useLocalStorage<{
    [key in ColumnType]: TaskType[];
  }>("tasks", {
    [ColumnType.TO_DO]: [],
    [ColumnType.IN_PROGRESS]: [],
    [ColumnType.PEER_REVIEW]: [],
    [ColumnType.DONE]: [],
  });
}

export default useTaskCollection;
