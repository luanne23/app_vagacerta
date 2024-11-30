import React from 'react';
import { Image, View, Text, StyleSheet, ScrollView } from 'react-native';
import { Wrapper, Container, Form, TextContainer, TextBlack, TextLink, TextLinkContainer } from './styles';
import BGTop from '../../assets/BGTop.png';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import { Button } from '../../components/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import api from '../../repositories/UsuarioRepository';

const validationSchema = Yup.object().shape({
  nome: Yup.string()
    .required('Nome é obrigatório')
    .min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('E-mail é obrigatório'),
  senha: Yup.string()
    .required('Senha é obrigatória')
    .min(6, 'Senha deve ter pelo menos 6 caracteres'),
});

export default function FormScreen({ navigation }) {
  return (
    <Wrapper>
      <Image source={BGTop} style={styles.bgImage} />
      <Container>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Formik
            initialValues={{ nome: '', email: '', senha: '' }}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
              try {
                await api.create({ id: null, nome: values.nome, email: values.email, senha: values.senha });
                resetForm({ values: { nome: '', email: '', senha: '' } });
                navigation.navigate('Login');
              } catch (error) {
                console.error("Erro ao criar usuário:", error);
              }
            }}
          >
            {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
              <View style={styles.formContainer}>
                <Logo />

                {/* Nome */}
                <Input
                  onChangeText={handleChange('nome')}
                  onBlur={handleBlur('nome')}
                  value={values.nome}
                  label="Nome"
                  placeholder="Digite seu nome"
                  style={styles.input}
                />
                {touched.nome && errors.nome && <Text style={styles.errorText}>{errors.nome}</Text>}

                {/* Email */}
                <Input
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  label="E-mail"
                  placeholder="Digite seu e-mail"
                  style={styles.input}
                />
                {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

                {/* Senha */}
                <Input
                  onChangeText={handleChange('senha')}
                  onBlur={handleBlur('senha')}
                  value={values.senha}
                  label="Senha"
                  placeholder="Digite sua senha"
                  secureTextEntry
                  style={styles.input}
                />
                {touched.senha && errors.senha && <Text style={styles.errorText}>{errors.senha}</Text>}

                {/* Botão de envio */}
                
                <Button onPress={handleSubmit} title="Cadastrar" style={styles.button} />
              </View>
            )}
          </Formik>

          <TextContainer>
            <TextBlack>Já tem uma conta?</TextBlack>
            <TextLinkContainer onPress={() => navigation.navigate('Login')}>
              <TextLink>Faça seu login.</TextLink>
            </TextLinkContainer>
          </TextContainer>
        </ScrollView>
      </Container>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  scrollViewContent: {
    padding: 20,
    justifyContent: 'center',
    flexGrow: 1,
  },
  formContainer: {
    width: '100%',
  },
  input: {
    width: '100%',
    marginBottom: 15, // Espaçamento entre os campos de input
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    fontSize: 12,
  },
  button: {
    width: '100%',
    marginTop: 20,
  },
});
