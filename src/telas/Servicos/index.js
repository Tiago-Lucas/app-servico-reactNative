import React from "react";
import { FlatList } from "react-native";
import Item from "./item/index";
import TelaPadrao from "../../componentes/TelaPadrao";

const servicos = [
    {
        id:1,
        nome:"banho",
        preco: 79.90,
        descricao:"não de banho no seu gato! mas se precisar nos damos"
    },
    {
        id:2,
        nome:"Vacina V4",
        preco:89.9,
        descricao:"uma dose da vacina v4. seu gato precisa de duas"
    },
    {
        id:3,
        nome:"Vacina Antirrábica",
        preco:99.9,
        descricao:"Uma dose da vacina antirrábica.Seu gato precisa de uma por ano"
    }
]

export default function Servicos(){
    return (
        <TelaPadrao>
            <FlatList data={servicos} removeClippedSubviews={false} renderItem={({item}) => <Item {...item}/>}
            keyExtractor={({id}) => String(id)}
            />
        </TelaPadrao>
    
    )
    
}