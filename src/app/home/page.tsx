import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./style";
import { Link } from "expo-router";

const menuItems = [
    {
        id: "1",
        nameFood: "Lasanha ao molho branco",
        descrition: "Lasanha com frango e molho branco.",
        price: "18,00",
        image: require("@/assets/images/lasanha.png")
    },
    {
        id: "2",
        nameFood: "Conchiglione recheado",
        descrition: "Macarrão conchiglione recheado com o que preferir (presunto, queijo, frango ) com molho de sua preferência (molho vermelho, branco ou rosé)",
        price: "35,00",
        image: require("@/assets/images/recheado.png")
    },
    {
        id: "3",
        nameFood: "Nhoque",
        descrition: "Nhoque com um molho de sua preferência (molho vermelho, rosé ou molho branco)",
        price: "18,50",
        image: require("@/assets/images/nhoque.png")
    },
    {
        id: "4",
        nameFood: "Carciofi alla giudia",
        descrition: "Alcachofras fritas temperadas com sal e pimenta do reino",
        price: "45,50",
        image: require("@/assets/images/giudia.png")
    }
];

const MenuScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.headerImage} source={require("@/assets/images/italiano.jpg")} />
                <Text style={styles.restaurantName}>LA VANBELLA</Text>
                <Text style={styles.restaurantOpcao}>Sabores que unem, momentos que marcam</Text>
            </View>

            <View style={styles.tabs}>
                {["Combos", "Lasanha", "Macarrão"].map((item) => (
                    <TouchableOpacity>
                        <Text style={styles.tabsName}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <ScrollView style={styles.menuList}>
                {
                    menuItems.map((item) => (
                        <Link href={"/produtos/page"} asChild>
                            <TouchableOpacity style={styles.menuItem}>
                                <View style={styles.menuContent}>
                                    <Text style={styles.itemName}>{item.nameFood}</Text>
                                    <Text style={styles.itemDescription}>{item.descrition}</Text>
                                    <Text style={styles.itemPrice}>{item.price}</Text>
                                </View>
                                <Image style={styles.itemImage} source={item.image} />
                            </TouchableOpacity>
                        </Link>
                    ))
                }
            </ScrollView>

            <View style={styles.footer}>
                <Text style={styles.footerText}>© 2025 La Vanbella</Text>
                <Text style={styles.footerText}>Endereço: Av. italiana, 320</Text>
                <Text style={styles.footerText}>Telefone: (18) 2345-6789</Text>
            </View>
        </View>
    );
};

export default MenuScreen;