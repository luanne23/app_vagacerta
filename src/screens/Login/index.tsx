import { Image, Alert } from 'react-native';
import {useContext, useState} from 'react'
import { Wrapper,Container, Form, TextContainer, TextBlack, TextLink, TextLinkContainer } from './styles';
import api from '../../repositories/UsuarioRepository';

import BGTop from '../../assets/BGTop.png';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import { Button } from '../../components/Button';
import { UsuarioContext } from '../../contexto/UsuarioContexto';


export default function Login({ navigation }) {


    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const {logar} = useContext(UsuarioContext); 
    const showAlert = (mensagem) => {
      Alert.alert("Erro", mensagem);
    };

    const handleLogin = async () => {
        try {
          const user = await api.login(email, senha);
          
          if (user) {
            console.log('Login successful', `Welcome, ${user.nome}!`);
            user.senha = senha;
            await logar(user);
            navigation.navigate('Auth', { screen: 'Home' });
          } else {
           showAlert('Email ou senha incorretos');
          }
        } catch (error) {
          showAlert('Erro ao tentar realizar login');
        }
      };

    return (
        <Wrapper>
            <Image source={BGTop} />

            <Container>

                <Form>
                    <Logo />
                    <Input label='E-mail' placeholder='digite seu e-mail' value={email}
        onChangeText={setEmail}/>
                    <Input label='Senha' placeholder='digite sua senha' value={senha} secureTextEntry
        onChangeText={setSenha}/>
                    <Button 
                    title="Entrar" 
                    noSpacing={true} 
                    variant='primary'
                    onPress={handleLogin}
                    />
                    <TextContainer>
                        <TextBlack>Não tem uma conta?</TextBlack>
                        <TextLinkContainer onPress={() => navigation.navigate('FormScreen')}>
                            <TextLink>
                                    Crie agora mesmo.
                            </TextLink>
                        </TextLinkContainer>
                    </TextContainer>
                </Form>

            </Container>
        </Wrapper>
    );
}
