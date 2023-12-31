import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../../contexts/themeContext';
import { styles } from './styles';
import { FinancesContext } from '../../../contexts/financesContext';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import FinanceHistoricCard from '../../finance/finance-historic-card';
import HomeBalance from '../home-balance';

const HomeFinanceHistoric: React.FC = () => {

  const navigation = useNavigation<StackNavigationProp<any>>()

  const { theme } = React.useContext(ThemeContext);
  const style = styles(theme);

  const { finances } = React.useContext(FinancesContext);

  return (
    <View style={style.container}>
      
      <View style={style.containerHeader}>
        <Text style={style.textTitle}>Histórico</Text>
      </View>
      <View style={style.containerValue}>
        {finances?.finances?.map((finance, i) => {
          if (i < 5) return <FinanceHistoricCard key={i} finance={finance} />
        })}
      </View>
      <TouchableOpacity style={style.containerBalance} onPress={() => navigation.navigate("FinanceHistoricScreen")}>
        <Text style={style.textTitle}>Ver mais</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeFinanceHistoric;