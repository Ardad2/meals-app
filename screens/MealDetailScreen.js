import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';

import { MEALS } from '../data/dummy-data';

function MealDetailScreen({route}) {

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find( (meal) => meal.id === mealId)

    return (
        <ScrollView style={styles.rootContainer}> 
        <Image style={styles.image} source={ {  uri: selectedMeal.imageUrl   }  }/>

        <Text style={styles.title}>{selectedMeal.title}</Text>

        <MealDetails 
        duration={selectedMeal.duration} 
        complexity={selectedMeal.complexity}
         affordability={selectedMeal.affordability} 
         textStyle={styles.detailText}
         />

         <View style={styles.listOuterContainer}> 

         <View style={styles.listContainer}> 

         <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal.ingredients} />

        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal.steps} />

        </View> 

        </View>




        </ScrollView>

        );

}

export default MealDetailScreen;

const styles = StyleSheet.create( {
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },

    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },

    detailText: {
        color: 'white'
    },
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer: {
        padding: 6,
        marginHorizontal: 24,
        marginVertical: 4,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
    },

    listOuterContainer: {
        alignItems: 'center'
    },

    listContainer: {
        width: '80%'
    }
});