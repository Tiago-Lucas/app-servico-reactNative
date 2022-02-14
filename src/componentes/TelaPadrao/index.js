import React from "react";
import { View, KeyboardAvoidingView,Platform,StatusBar } from "react-native";
import estilosGlobal, { cores } from '../../estilos'


export default function TelaPadrao({children}){
    return (
        <View style={estilosGlobal.preencher}>   
            <StatusBar backgroundColor={cores.roxo}/>
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={estilosGlobal.preencher}>
                    {children}
                </KeyboardAvoidingView>
        
        </View>
    )
}