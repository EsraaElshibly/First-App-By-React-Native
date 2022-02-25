import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './style';

export default function TodoList({ list, MarkItem, RemoveItem }) {
  return (
    <FlatList style={styles.addTodo}
      data={list || []}
      renderItem={({ item: todo }) => (
        <View style={styles.addTodoContainer}>
          <Text style={styles.itemTitle}>{todo.title}</Text>
          {/* <TouchableOpacity style={styles.btnContainer} onPress={MarkItem}>
            <Text style={styles.btnText}>Mark</Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            style={styles.btnContainer}
            onPress={(item) => {
              RemoveItem(item);
            }}
          >
            <Text style={styles.btnText}>Remove</Text>
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={(item, index) => `${index}`}
      ListHeaderComponent={() => (
        <Text style={styles.listHeader}>My Daily Tasks is: {list.length} </Text>
      )}
      ListFooterComponent={() => (
        <Text style={styles.endList}>End of list</Text>
      )}
      ItemSeparatorComponent={() => <View style={styles.line}></View>}
    />
  );
}
