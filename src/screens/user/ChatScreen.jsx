export default function ChatScreen({ route }) {
  const { pro } = route.params;

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Chat with {pro.name}</Text>
    </View>
  );
}