import React from 'react'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import Rotas from './src/Rotas'
import reactotron from 'reactotron-react-native'

reactotron.configure().useReactNative().connect();

export default function App() {
  return <Rotas/>
}


