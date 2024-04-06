import React from "react";
import { Box, Heading, Text, Button, Stack, Container, Image, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { FaCode, FaPaintBrush, FaLaptopCode } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")}>
      <Container maxW="7xl" py={16}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={6}>
            <Heading as="h1" fontSize={{ base: "4xl", md: "6xl" }} fontWeight="bold" color="teal.500">
              Elevate Your Web Presence
            </Heading>
            <Text fontSize="xl" maxW="2xl">
              We are a creative web design agency that crafts stunning, modern websites to help your business stand out online. Let us bring your vision to life!
            </Text>
            <Button size="lg" colorScheme="teal" rightIcon={<FaCode />}>
              Get Started
            </Button>
          </Stack>
          <Box>
            <Image src="https://images.unsplash.com/photo-1680536555364-9dd4a1ab313e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzZCUyMGNsYXklMjBzcGhlcmUlMjB3aXRoJTIwZ2xvc3N5JTIwZ2xhc3MlMjBjdWJlc3xlbnwwfHx8fDE3MTI0MTEwNDd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="3D Design" objectFit="cover" w="100%" h={{ base: "auto", md: "500px" }} rounded="lg" shadow="2xl" />
          </Box>
        </SimpleGrid>
      </Container>

      <Container maxW="7xl" py={16}>
        <Heading as="h2" size="xl" mb={10} textAlign="center">
          Our Services
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box p={6} bg={useColorModeValue("white", "gray.800")} rounded="lg" shadow="md" textAlign="center">
            <FaPaintBrush size={48} color="teal.500" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              UI/UX Design
            </Heading>
            <Text>We create intuitive and visually appealing user interfaces that engage your audience.</Text>
          </Box>
          <Box p={6} bg={useColorModeValue("white", "gray.800")} rounded="lg" shadow="md" textAlign="center">
            <FaCode size={48} color="teal.500" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              Web Development
            </Heading>
            <Text>Our skilled developers build fast, responsive, and SEO-friendly websites using the latest technologies.</Text>
          </Box>
          <Box p={6} bg={useColorModeValue("white", "gray.800")} rounded="lg" shadow="md" textAlign="center">
            <FaLaptopCode size={48} color="teal.500" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              E-commerce Solutions
            </Heading>
            <Text>We develop powerful online stores that drive sales and provide a seamless shopping experience.</Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Index;
