import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { connect } from "react-redux";
import { store } from "../redux/store";
import { add, remove } from "../redux/action";
function Posts({data, navigation}) {
    //console.log(data)
    const [value, setValue] = useState();
    const handleAddPost = () => {
        store.dispatch(add(value))
        const newState = store.getState();
        fetch("https://6571f856d61ba6fcc01419d1.mockapi.io/users/" + data.id, {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({post: [...newState.post]})
        }).then(resp => resp.json())
        .then(json => {console.log(json)})
        
    }
    const handleDelete = (index) => {
        store.dispatch(remove(index));
        const newState = store.getState();
        fetch("https://6571f856d61ba6fcc01419d1.mockapi.io/users/" + data.id, {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({post: [...newState.post]})
        }).then(resp => resp.json())
        .then(json => {console.log(json)})
    }
    return (
        <View style={styles.container}>
            <Text>{data.name}</Text>
            <FlatList
                style={{width: '100%'}}
                data={data.post}
                renderItem={({item, index}) => {
                    return (
                        <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '90%'}}>
                            <Text>{item.value}</Text>
                            <Button color={'green'} title="Udpate" onPress={() => {navigation.navigate('update', {item, index})}}/>
                            <Button color={'red'} title="Delete" onPress={() => {handleDelete(index)}}/>
                        </View>
                    )
                }}
            />
            <TextInput placeholder="enter post here" style={{width: '90%', backgroundColor: '#fff'}} onChangeText={setValue}></TextInput>
            <Button title="add" color={'green'} onPress={handleAddPost}></Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})

const mapToProps = (state) => (
    {data: state}
)
export default connect(mapToProps)(Posts);