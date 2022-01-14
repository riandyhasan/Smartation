import { Text, Pressable } from "react-native";

const Button = ({ click, text, styleText, styleButton }) => {
  return (
    <Pressable style={styleButton} onPress={click}>
      <Text style={styleText}>{text}</Text>
    </Pressable>
  );
};

export default Button;
