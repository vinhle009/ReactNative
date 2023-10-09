import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    Pressable,
    TouchableOpacity,
    TextInput,
    Dimensions,
  } from "react-native";
  export default function ColorSelection() {
    return(
        <View style={styles.container}>
            <View style={styles.product}>
                <View style={styles.productImage}>
                    <Image style={styles.image} source={require("../assets/vs_blue.png")}/>
                </View>
                <View style={styles.productInfo}>
                    <Text style={styles.txtInfo}>Điện Thoại Vsmart Joy 3</Text>
                    <Text style={styles.txtInfo}>Hàng chính hãng</Text>
                </View>
            </View>
            <View style={styles.color}>
                <Text style={styles.txtColor}>Chọn một màu bên dưới</Text>
            </View>
            <View style={styles.done}>
                <TouchableOpacity>
                    <Text style={styles.txtDone}>Xong</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#c4c4c4",
    },
    product: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 10,
    },
    image: {
      width: 112,
      height: 135,
    },
    color: {
        flex: 2.5,
        backgroundColor: "#c4c4c4",
        padding: 10,
    },
    done: {
        flex: 0.5,
        padding: 10,
    },
    txtInfo: {
        fontSize: 15,
        fontWeight: "400",
    },
    productInfo: {
        marginTop: 10,
        marginLeft: 10,
    },
  })