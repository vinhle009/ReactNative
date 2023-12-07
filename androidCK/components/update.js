import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { connect } from "react-redux";
import { store } from "../redux/store";
import { update } from "../redux/action";
function Update({navigation, route}) {
    const {index} = route.params;
    const [newValue, setNewValue] = useState();
    const handleUpdate = () => {
        store.dispatch(update(newValue, index));
        const newState = store.getState();
        fetch("https://6571f856d61ba6fcc01419d1.mockapi.io/users/" + newState.id, {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({post: [...newState.post]})
        }).then(resp => resp.json())
        .then(json => {console.log(json)})
        navigation.goBack();
        
    }
    return (
        <View style={styles.container}>
            <TextInput placeholder="value update" style={{width: '90%', height: 30, backgroundColor: '#fff'}}
            onChangeText={setNewValue}>

            </TextInput>
            
            <Button title="save" color={'green'} onPress={handleUpdate}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mapToProps = (state) => (
    {data: state.post}
)
export default connect(mapToProps)(Update)