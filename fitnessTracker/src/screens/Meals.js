import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput,ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const Meals = () => {
  const [mealPlans, setMealPlans] = useState([
    { id: 1, meal: 'Breakfast', timing: '8 AM', dietPlan: 'Bread, Fruits, Eggs' },
    // ... other meal plans
  ]);
  const [newDietPlan, setNewDietPlan] = useState('');

  const addDietPlan = (planId) => {
    const updatedMealPlans = [...mealPlans];
    updatedMealPlans[planId - 1].dietPlan = updatedMealPlans[planId - 1].dietPlan + ' , ' + newDietPlan;
    setMealPlans(updatedMealPlans);
    setNewDietPlan('');
  };

  const deleteDietPlan = (planId) => {
    const updatedMealPlans = [...mealPlans];
    updatedMealPlans[planId - 1].dietPlan = ''; // Clearing the diet plan
    setMealPlans(updatedMealPlans);
  };
 
  return (
    
    <View style={styles.container}>
      <Text style={styles.heading}>Meal Plans for a Week</Text>
      {/* Render Meal Plans */}
      <ScrollView>
      {mealPlans.map(plan => (
        <LinearGradient key={plan.id} colors={['#d2ece1', '#316851']} style={styles.mealContainer} >
          <Text style={styles.mealHeader}>{plan.meal}</Text>
          <Text style={styles.mealHeader}>Meal Timing: {plan.timing}</Text>
          <Text style={styles.mealItems}>Diet plan: {plan.dietPlan}</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter new diet plan"
            value={newDietPlan}
            onChangeText={text => setNewDietPlan(text)}
          />

          <View style={styles.actionButtons}>
            <TouchableOpacity onPress={() => addDietPlan(plan.id)}>
              <Image
                source={require('../../assets/add-button.png')}
                style={styles.actionIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/edit.png')}
                style={styles.actionIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteDietPlan(plan.id)}>
              <Image
                source={require('../../assets/trash.png')}
                style={styles.actionIcon}
              />
            </TouchableOpacity>
          </View>
         
        </LinearGradient>
        
      ))}
      <LinearGradient colors={['#d2ece1', '#316851']} style={styles.mealContainer}>
        <Text style={styles.mealHeader}>Lunch</Text>
        <Text style={styles.mealHeader}>Meal Timing: 1 PM</Text>
        <Text style={styles.mealItems}>Diet plan: Grilled Chicken, Salad</Text>
        <TextInput
        style={{borderWidth: 2,
        borderColor: '#d2ece1',
        padding: 8,
        borderRadius:10,

        marginBottom: 10,
        marginTop:15}}
        placeholder="Enter new diet plan"
        value={newDietPlan}
        onChangeText={text => setNewDietPlan(text)}
      />
        <View style={styles.actionButtons}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/add-button.png')}
              style={styles.actionIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/edit.png')}
              style={styles.actionIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/trash.png')}
              style={styles.actionIcon}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Dinner */}
      <LinearGradient colors={['#d2ece1', '#316851']} style={styles.mealContainer}>
        <Text style={styles.mealHeader}>Dinner</Text>
        <Text style={styles.mealHeader}>Meal Timing: 7 PM</Text>
        <Text style={styles.mealItems}>Diet plan: Salmon, Veggies, Rice</Text>
        <TextInput
        style={{borderWidth: 2,
        borderColor: '#d2ece1',
        padding: 8,
        borderRadius:10,

        marginBottom: 10,
        marginTop:15}}
        placeholder="Enter new diet plan"
        value={newDietPlan}
        onChangeText={text => setNewDietPlan(text)}
      />
        <View style={styles.actionButtons}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/add-button.png')}
              style={styles.actionIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/edit.png')}
              style={styles.actionIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/trash.png')}
              style={styles.actionIcon}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
      </ScrollView>
    </View>    

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2fff8',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputField: {
    borderWidth: 2,
    borderColor: '#d2ece1',
    borderRadius:10,
    padding: 8,
    marginBottom: 10,
    marginTop:15
  },
  mealContainer: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  mealHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'#ffffff'
  },
  mealItems: {
    fontSize: 17,
    color: 'white',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  actionIcon: {
    borderRadius: 1,
    overflow: 'hidden',
    height: 30,
    width: 30,
    marginRight: 10,
  },
});

export default Meals;
