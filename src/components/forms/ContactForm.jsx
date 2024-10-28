import { useState } from 'react';
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        'service_4xeb3iq',
        'template_5mtsobp',
        {
          email: formData.email,
          message: formData.message,
        },
        'sPQfZfVzsM8AHo6AF'
      );
      alert('Message sent successfully!');
      setFormData({ email: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Message sending failed, please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl id="email" isRequired>
          <FormLabel color={useColorModeValue('gray.800', 'white')}>
            Email
          </FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            size="lg"
            variant="filled"
            bg={useColorModeValue('white', 'gray.600')}
            color={useColorModeValue('gray.800', 'white')}
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="message" isRequired>
          <FormLabel color={useColorModeValue('gray.800', 'white')}>
            Message
          </FormLabel>
          <Textarea
            placeholder="Type your message"
            size="lg"
            variant="filled"
            bg={useColorModeValue('white', 'gray.600')}
            color={useColorModeValue('gray.800', 'white')}
            value={formData.message}
            onChange={handleChange}
          />
        </FormControl>

        <Button
          colorScheme="blue"
          size="lg"
          type="submit"
          w="full"
          isLoading={isSending}
        >
          Send Message
        </Button>
      </VStack>
    </form>
  );
};

export default ContactForm;
