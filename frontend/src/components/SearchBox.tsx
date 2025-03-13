import { Input, Container, Box, keyframes } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";

interface SearchBoxProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const borderAnimation = keyframes`
  0% { border-color: #7928CA; }
  50% { border-color: #FF0080; }
  100% { border-color: #7928CA; }
`;

const SearchBox = ({ searchQuery, setSearchQuery }: SearchBoxProps) => {
  return (
    <Container maxWidth="container.lg" px={4} mt={6}>
      <Box
        position="relative"
        borderRadius="full"
        border="3px solid"
        borderColor="#7928CA"
        animation={`${borderAnimation} 2s linear infinite`}
      >
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          size="lg"
          bg="white"
          color="black"
          borderRadius="full"
          border="none"
          _placeholder={{ color: "transparent" }} 
        />
        <Box
          position="absolute"
          left="12px"
          top="50%"
          transform="translateY(-50%)"
          pointerEvents="none"
          color="gray.500"
        >
          <Typewriter
            words={["Search tasks by title"]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={85}
            deleteSpeed={50}
            delaySpeed={3000}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default SearchBox;
