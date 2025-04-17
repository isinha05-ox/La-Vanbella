import { Link } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.titulo}>Cadastre-se no La Vanbella</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome completo:</Text>
        <TextInput style={styles.input} placeholder="Digite seu nome:" />
        <Text style={styles.label}>Email:</Text>
        <TextInput style={styles.input} placeholder="Digite seu email:" />
        <Text style={styles.label}>CPF:</Text>
        <TextInput style={styles.input} placeholder="Digite seu cpf:" />
        <Text style={styles.label}>Data de nascimento:</Text>
        <TextInput style={styles.input} placeholder="Digite seu aniversario:" />
        <Text style={styles.label}>Criar senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha:"
          secureTextEntry
        />
      </View>
      <Link href={"/home/page"} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </Link>
      <Link href={"/"}>
        <Text style={styles.link}>Possuo Cadastro</Text>
      </Link>
    </View>
  );
}