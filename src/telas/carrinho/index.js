import React from "react";
import { FlatList} from "react-native";
import Item from "./item/index";
import TelaPadrao from "../../componentes/TelaPadrao";
import StatusCarrinho from "../../componentes/StatusCarrinho";

const servicos = [
    {
        id:1,
        nome:"banho",
        preco: 79.90,
        descricao:"não de banho no seu gato! mas se precisar nos damos",
        quantidade:1
    },
    {
        id:2,
        nome:"Vacina V4",
        preco:89.9,
        descricao:"uma dose da vacina v4. seu gato precisa de duas",
        quantidade:2
    },
    {
        id:3,
        nome:"Vacina Antirrábica",
        preco:99.9,
        descricao:"Uma dose da vacina antirrábica.Seu gato precisa de uma por ano",
        quantidade:1
    }
]

export default function Carrinho(){

    const total = servicos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0)
    return (
        <TelaPadrao>
        <StatusCarrinho total={total}/>
        <FlatList data={servicos} removeClippedSubviews={false} renderItem={({item}) => <Item {...item}/>}
         keyExtractor={({id}) => String(id)}
         />
         </TelaPadrao>
    )
    
}