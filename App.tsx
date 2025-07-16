import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme } from './theme';

export default function App() {
  function handleDeletePress() {
    Alert.alert(
      "Are you sure you want to delete this?",
      "this action is irreversable!",
      [
        {
          text: "Yes",
          onPress: function () { console.log("Ok, deleting!"); }
        },
        {
          text: "No",
          onPress: function () { console.log("Cancelling!"); }
        }
      ]
    );

  }
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee</Text>
        <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={handleDeletePress}>
          <Text style={styles.buttonText}>DELETE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: 'center',
  },
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderColor: theme.colorCerulean,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    fontSize: 18,
    fontWeight: "200",
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  }
});
