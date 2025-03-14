import { TaskType } from "../types/types";
import { DeleteIcon } from '@chakra-ui/icons';
import { Box, IconButton, ScaleFade } from '@chakra-ui/react';
import _ from 'lodash';
import { memo } from 'react';
import { useTaskDragAndDrop } from "../hooks/useTaskDragAndDrop";
import { AutoResizeTextarea } from "./AutoResizeTextarea";

type TaskProps = {
    index: number;
    task: TaskType;
    onUpdate: (id: TaskType['id'], updatedTask: TaskType) => void;
    onDelete: (id: TaskType['id']) => void;
    onDropHover: (i: number, j: number) => void;
  };

const Task = ({
    index,
    task,
    onUpdate: handleUpdate,
    onDropHover: handleDropHover,
    onDelete: handleDelete,
  }: TaskProps) => {
    const { ref, isDragging } = useTaskDragAndDrop<HTMLDivElement>(
        { task, index: index },
        handleDropHover,
      );
    
      const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newTitle = e.target.value;
        handleUpdate(task.id, { ...task, title: newTitle });
      };
      const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newDesription = e.target.value;
        handleUpdate(task.id, { ...task, description: newDesription });
      };
    
      const handleDeleteClick = () => {
        handleDelete(task.id);
      };
    
      return (
        <ScaleFade in={true} unmountOnExit>
          <Box
            ref={ref}
            as="div"
            role="group"
            position="relative"
            rounded="lg"
            w={200}
            pl={3}
            pr={7}
            pt={3}
            pb={1}
            boxShadow="xl"
            cursor="grab"
            fontWeight="bold"
            userSelect="none"
            bgColor={task.color}
            opacity={isDragging ? 0.5 : 1}
          >
            <IconButton
              position="absolute"
              top={0}
              right={0}
              zIndex={100}
              aria-label="delete-task"
              size="md"
              colorScheme="solid"
              color={'gray.700'}
              icon={<DeleteIcon />}
              opacity={0}
              _groupHover={{
                opacity: 1,
              }}
              onClick={handleDeleteClick}
            />
            <AutoResizeTextarea
              value={task.title}
              fontWeight="semibold"
              cursor="inherit"
              border="none"
              p={0}
              resize="none"
              minH={50}
              maxH={100}
              focusBorderColor="none"
              color="gray.700"
              onChange={handleTitleChange}
            />
            <AutoResizeTextarea
              value={task.description}
              fontWeight="semibold"
              cursor="inherit"
              border="none"
              p={0}
              resize="none"
              minH={70}
              maxH={200}
              focusBorderColor="none"
              color="gray.700"
              onChange={handleDescriptionChange}
            />
          </Box>
        </ScaleFade>
      );
}

// export default Task
export default memo(Task, (prev, next) => {
    if (
      _.isEqual(prev.task, next.task) &&
      _.isEqual(prev.index, next.index) &&
      prev.onDelete === next.onDelete &&
      prev.onDropHover === next.onDropHover &&
      prev.onUpdate === next.onUpdate
    ) {
      return true;
    }
  
    return false;
  });
