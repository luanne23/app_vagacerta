import React, { useState, useEffect } from 'react';
import { Image, FlatList, View, Text } from 'react-native';
import { Wrapper, Container, ListContainer, TextVagas } from './styles';

import BGTop from '../../assets/BGTop.png';
import Logo from '../../components/Logo';
import VagaCard from '../../components/VagaCard';
import vagaRepository from '../../repositories/VagaRepository';

export default function List() {

  const [vagas, setVagas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchVagas = async () => {
      try {
        const response = await vagaRepository.findAll()
        console.log(response)
        setVagas(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVagas();
  }, []);




  return (
    <Wrapper>
      <Image source={BGTop} style={{ maxHeight: 86 }} />
      <Container>
        <Logo />
        <TextVagas>{vagas.length} vagas encontradas!</TextVagas>
        <ListContainer>
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            <FlatList
              data={vagas}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) =>
                <VagaCard
                  id={item.id}
                  title={item.titulo}
                  dataCreated={item.dataCadastro}
                  company={item.empresa}
                />
              }
              showsVerticalScrollIndicator={true}
              ListEmptyComponent={() => (
                <View>
                  <Text>
                    Você ainda não tem tarefas cadastradas
                  </Text>
                  <Text>
                    Crie tarefas e organize seus itens a fazer.
                  </Text>
                </View>
              )}
            />
          )}
        </ListContainer>

      </Container>
    </Wrapper>
  );
}
