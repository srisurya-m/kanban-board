import { useRef } from "react";
import { ColumnType, ItemType } from "../types/types";
import { DragItem, TaskType } from "../types/types";
import { useDrop } from "react-dnd";

function useColumnDrop(
  column: ColumnType,
  handleDrop: (fromColumn: ColumnType, taskId: TaskType["id"]) => void
) {
  const ref = useRef<HTMLDivElement | null>(null);

  const [{ isOver }, drop] = useDrop<DragItem, void, { isOver: boolean }>({
    accept: ItemType.TASK,
    drop: (dragItem) => {
      if (!dragItem || dragItem.from === column) {
        return;
      }
      handleDrop(dragItem.from, dragItem.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  drop(ref); 

  return {
    isOver,
    dropRef: ref,
  };
}

export default useColumnDrop;
