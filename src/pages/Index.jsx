// Complete the Index page component here
// Use chakra-ui
import { Box, Input, FormControl, FormLabel, Button, VStack, useToast } from '@chakra-ui/react';
import { FaPlus } from "react-icons/fa"; // example - use react-icons/fa for icons

const Index = () => {
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      address: formData.get('address'),
      email: formData.get('email')
    };

    try {
      const response = await fetch('https://api.example.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Network response was not ok.');

      toast({
        title: 'Success',
        description: "Your contact information has been successfully submitted.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: "There was an error submitting your contact information.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={5} maxW="500px" borderWidth="1px" borderRadius="lg" overflow="hidden" m="auto" mt="10vh">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel htmlFor='name'>Name</FormLabel>
            <Input id='name' name='name' type='text' placeholder='Your Name' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor='address'>Address</FormLabel>
            <Input id='address' name='address' type='text' placeholder='Your Address' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input id='email' name='email' type='email' placeholder='Your Email' />
          </FormControl>
          <Button type='submit' colorScheme='blue' size='lg'>Submit</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Index;