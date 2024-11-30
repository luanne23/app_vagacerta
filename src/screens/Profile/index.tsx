import React, { useContext } from 'react';
import { Image, View, Text, StyleSheet, ScrollView } from 'react-native';
import { Wrapper, Container, Header, HeaderButtonContainer, ButtonText } from './styles';
import BGTop from '../../assets/BGTop.png';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import { Button } from '../../components/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import api from '../../repositories/UsuarioRepository';
import { UsuarioContext } from '../../contexto/UsuarioContexto';
import { ButtonIcon } from '../Details/styles';
import { Feather } from '@expo/vector-icons';
import theme from '../../theme';

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

export default function Profile({ navigation }) {
    const { usuario, logar, logof } =  useContext(UsuarioContext)
    if(usuario == null){
        navigation.navigate('Login');
        return <View></View>;
    }
    console.log(usuario)
    
    return (
        <Wrapper>
            <Header>
                <HeaderButtonContainer onPress={() => navigation.goBack()}>
                    <ButtonIcon>
                        <Feather size={16} name="chevron-left" color={theme.COLORS.BLUE} />
                    </ButtonIcon>
                    <ButtonText>
                        Voltar
                    </ButtonText>
                </HeaderButtonContainer>
                <Logo />
            </Header>
            <Container>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <Formik
                        initialValues={{ nome: usuario.nome, email: usuario.email, senha: usuario.senha }}
                        validationSchema={validationSchema}
                        onSubmit={async (values, { resetForm }) => {
                            try {
                                const u = { id: usuario.id, nome: values.nome, email: values.email, senha: values.senha };
                                await api.update(usuario.id, u);
                                await logar(u);
                                //resetForm({ values: { nome: '', email: '', senha: '' } });
                                navigation.navigate('Home');
                            } catch (error) {
                                console.error("Erro ao atualizar usuário:", error);
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

                                <Button onPress={handleSubmit} title="Salvar Informações" style={styles.button} />
                                <Button onPress={async () => {
                                await logof();
                                   
                                }} title="Sair" style={styles.buttonLogof} />
                            </View>
                        )}
                    </Formik>

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
    buttonLogof: {
        width: '100%',
        marginTop: 20,
        backgroundColor: 'red'
    },
});
