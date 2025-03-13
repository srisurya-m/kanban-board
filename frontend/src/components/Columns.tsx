import {
  Badge,
  Box,
  Heading,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import useColumnDrop from "../hooks/useColumnDrop";
import useColumnTasks from "../hooks/useColumnTasks";
import { ColumnType } from "../types/types";
import Task from "./Task";

const ColumnColorScheme: Record<ColumnType, string> = {
  Todo: "gray",
  "In Progress": "blue",
  "Peer Review": "red",
  Done: "green",
};

const Columns = ({
  column,
  searchQuery,
}: {
  column: ColumnType;
  searchQuery: string;
}) => {
  const { tasks, deleteTask, dropTaskFrom, swapTasks, updateTask } =
    useColumnTasks(column);

  const { dropRef, isOver } = useColumnDrop(column, dropTaskFrom);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box>
      <Heading fontSize="md" mb={4} letterSpacing="wide">
        <Badge
          px={2}
          py={1}
          rounded="lg"
          colorScheme={ColumnColorScheme[column]}
        >
          {column}
        </Badge>
      </Heading>
      <Stack
        ref={dropRef}
        direction={{ base: "row", md: "column" }}
        h={{ base: 300, md: 600 }}
        p={4}
        mt={2}
        spacing={4}
        bgColor={useColorModeValue("gray.50", "gray.900")}
        rounded="lg"
        boxShadow="md"
        overflow="auto"
        opacity={isOver ? 0.85 : 1}
      >
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task, index) => (
            <Task
              key={task.id}
              task={task}
              index={index}
              onDropHover={swapTasks}
              onUpdate={updateTask}
              onDelete={deleteTask}
            />
          ))
        ) : (
          <Box textAlign="center" color="gray.500">
            No tasks found
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default Columns;
