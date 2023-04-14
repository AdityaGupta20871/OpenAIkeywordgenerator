import { Box, Center, Container } from "@chakra-ui/react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import TextInput from "./components/TextInput"
import { useState } from "react"
import KeywordsModal from "./components/KeywordsModal"

const App = () => {
  const [keywords, setKeywords] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const extractKeywords = async (text) => {
    setLoading(true);
    setIsOpen(true);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt:
          'Extract keywords from this text. Make the first letter of every word uppercase and separate with commas:\n\n' +
          text +
          '',
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.8,
        presence_penalty: 0.0,
      }),
    };

    try {
      const response = await fetch(
        import.meta.env.VITE_OPENAI_API_URL,
        options
      );
      const json = await response.json();
      console.log(json.choices[0].text.trim());
      setKeywords(json.choices[0].text.trim());
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Box bgImage='public/images/Default_Character_Sheet_complex_3d_render_ultra_detailed_of_a_0_e3d208a1-6dfe-4c1b-84c9-cb8688363761_1.jpg' bgSize='cover' 
   color='whiteAlpha.900' w='100vw' h='100vh' >  
      <Container maxW='xl' centerContent>
      <Header />
      <TextInput  extractKeywords={extractKeywords}/>
      <Footer />
      </Container>
      <KeywordsModal keywords={keywords}  loading={loading} isOpen={isOpen} 
      closeModal={closeModal}/>
      
    </Box>
  )
}

export default App
