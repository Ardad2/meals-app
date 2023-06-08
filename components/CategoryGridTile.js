import { Pressable, View, Text, StyleSheet } from 'react-native';

function CategoryGridTile({title, color}) {
    return ( 
    <View style={styles.gridItem}>
        <Pressable> 
            <View>
                <Text>{title}</Text>
            </View>
        </Pressable> 
    </View> 
    )
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1, 
        margin: 16,
        height: 105,
        borderRadius: 8,
        elevation: 4
    },

    innerContainer: {
        flex: 1, 
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    }
}
);