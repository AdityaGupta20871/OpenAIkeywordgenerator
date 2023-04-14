import { useState } from "react";
import { Textarea } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import React from 'react'
    
const TextInput = ({extractKeywords}) => {
    const toast =  useToast();
    const[text,setText] = useState('');
    const submitText = () =>{
        if(text === ''){
            toast({
                title: "Please Enter Text",
                description: "Please Enter Text",
                status: "error",
                duration: 5000,
                isClosable: false,
            });
            return;
        }
        extractKeywords(text);
    }


  return (
    <>
    <Textarea placeholder="Enter your text here" 
    color='black' padding='4' marginTop={4} value={text}
    onChange={(e)=>setText(e.target.value)} bg='whiteAlpha.300' />
    <Button  bg='green.700'
    color='white'
    marginTop={4}
    width='50'
    _hover={{ bg: 'green.500' }} onClick={submitText} >Get Keywords</Button>
    </>
  )
}

export default TextInput