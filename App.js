
import { StatusBar, SafeAreaView, View } from 'react-native';
import { 
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_400Regular_Italic
} from '@expo-google-fonts/montserrat';

import Lista from './src/telas/Lista';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <View />
  }



  return (
    <SafeAreaView>
      <StatusBar />
      <Lista />
    </SafeAreaView>
  );
}



