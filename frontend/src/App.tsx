import { Container, IconButton, SimpleGrid } from "@chakra-ui/react";
import Columns from "./components/Columns";
import Header from "./components/Header";
import { ColumnType } from "./types/types";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DarkModeIconButton from "./components/DarkMode";
import useColumnTasks from "./hooks/useColumnTasks";
import { AddIcon } from "@chakra-ui/icons";
import SearchBox from "./components/SearchBox";
import { useState } from "react";

function App() {
  const { addEmptyTask } = useColumnTasks(ColumnType.TO_DO);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Header />
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <DarkModeIconButton position="absolute" top={0} right={2} />
      <IconButton
        position="fixed"
        bottom="20px"
        right="20px"
        size="lg"
        colorScheme="blue"
        aria-label="add-task"
        icon={<AddIcon />}
        onClick={addEmptyTask}
      />
      <DndProvider backend={HTML5Backend}>
        <Container maxWidth="container.lg" px={4} py={10}>
          <SimpleGrid
            columns={{ base: 1, md: 4 }}
            spacing={{ base: 16, md: 4 }}
          >
            <Columns column={ColumnType.TO_DO} searchQuery={searchQuery} />
            <Columns column={ColumnType.IN_PROGRESS} searchQuery={searchQuery} />
            <Columns column={ColumnType.PEER_REVIEW} searchQuery={searchQuery}/>
            <Columns column={ColumnType.DONE} searchQuery={searchQuery} />
          </SimpleGrid>
        </Container>
      </DndProvider>
    </>
  );
}

export default App;
