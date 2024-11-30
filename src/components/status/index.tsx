import React from 'react';
import { View, Text } from 'react-native';

// Interface para as props
interface StatusBallProps {
  active: boolean;
}

const StatusBall: React.FC<StatusBallProps> = ({ active }) => {
  const ballStyle = {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: active ? 'green' : 'red',
    marginRight: 10, // Espaçamento entre a bolinha e o texto
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={ballStyle} />
      <Text>{active ? 'Ativo' : 'Inativo'}</Text>
    </View>
  );
};

export default StatusBall;
