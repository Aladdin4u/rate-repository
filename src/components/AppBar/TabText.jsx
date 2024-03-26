import Text from "../Text";

const TabText = ({ text, style }) => {
  return (
    <Text
      fontSize="subheading"
      fontWeight="bold"
      style={style}
    >
      {text}
    </Text>
  );
};

export default TabText;
