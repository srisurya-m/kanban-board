export enum ColumnType {
  TO_DO = "Todo",
  IN_PROGRESS = "In Progress",
  PEER_REVIEW = "Peer Review",
  DONE = "Done",
}

export enum ItemType {
  TASK = "Task",
}

export interface TaskType {
  id: string;
  title: string;
  description: string;
  column: ColumnType;
  color: string;
}

export interface DragItem {
  index: number;
  id: TaskType["id"];
  from: ColumnType;
}
