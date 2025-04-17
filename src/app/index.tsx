import { Link } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.titulo}>Entre com sua conta La Vanbella</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail:</Text>
        <TextInput style={styles.input} placeholder="Digite seu email:" />
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha:"
          secureTextEntry
        />
      </View>
      <Link href={"/home/page"} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </Link>
      <Link href={"/cadastro/page"}>
        <Text style={styles.link}>Crie sua conta</Text>
      </Link>
    </View>
  );
}