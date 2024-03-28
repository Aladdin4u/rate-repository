import { StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 6,
  },
});

const Avatar = ({ avatarUri }) => {
  return <Image source={{ uri: avatarUri }} style={styles.avatar} />;
};

export default Avatar;
