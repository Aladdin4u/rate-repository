import { View } from "react-native";

import Text from "./Text";

const ProfileInfo = ({ testID, value, style, styleView, color, fontSize, fontWeight }) => {
  return (
    <View testID={testID} style={styleView}>
      <Text
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        style={style}
      >
        {value}
      </Text>
    </View>
  );
};

export default ProfileInfo;
