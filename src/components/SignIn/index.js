import React from 'react'
import{ FaReact } from 'react-icons/fa'
import { InputContainer, Icon, FormWrap, Text, FormButton, FormInput, FormH1, Form, FormContent, ReactIcon, FormLabel,GridLeft} from './SignInElements'
const index = () => {
  return (
    <>
    <InputContainer>
      <FormWrap>
        <GridLeft>
        <Icon to="/" >
          <ReactIcon><FaReact/>
          </ReactIcon>
          React.js
        </Icon>
        </GridLeft>
        
        <FormContent>
          <Form action= "#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput type ='email' required/>
            <FormLabel hrmlFor='for'>Password</FormLabel>
            <FormInput type = 'password' required/>
            <FormButton type='submit'>Continue</FormButton>
            <Text>Forgot password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </InputContainer>
    </>
  )
}

export default index