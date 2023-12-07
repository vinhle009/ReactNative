import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { connect } from "react-redux";
import { store } from "../redux/store";
import { init } from "../redux/action";

function Login({ navigation }) {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleLogin = () => {
        fetch('https://6571f856d61ba6fcc01419d1.mockapi.io/users?name=' + userName)
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
            }).then(json => {
                console.log(json)
                if (json.length != 0) {
                    if (json[0].password === password) {
                        store.dispatch(init(json[0]));
                        navigation.navigate('posts');
                    }
                }

            })
    }
    return (
        <View style={styles.container}>
            <TextInput placeholder="userName" style={styles.input} onChangeText={setUserName}></TextInput>
            <TextInput placeholder="password" style={styles.input} onChangeText={setPassword}></TextInput>
            <Button title="Login" color={'green'} onPress={handleLogin}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '90%',
        height: 40,
        backgroundColor: '#fff',
        borderWidth: 1,
        marginBottom: 10
    }
})

export default connect()(Login)