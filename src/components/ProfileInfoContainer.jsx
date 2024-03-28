import { View, StyleSheet } from "react-native";

import Avatar from "./RepositoryItem/Avatar";
import theme from "../theme";
import ProfileInfo from "./ProfileInfo";

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    flexGrow: 0,
    gap: 20,
  },
  profileInfoContainer: {
    display: "flex",
    flexGrow: 1,
    gap: 10,
    justifyContent: "space-between",
  },
  tag: {
    display: "flex",
    alignSelf: "flex-start",
    flexGrow: 1,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    padding: 6,
    borderRadius: 4,
  },
});

const ProfileInfoContainer = ({ ownerAvatarUrl, fullName, description, language }) => {
  return (
    <View style={styles.profileContainer}>
      <Avatar avatarUri={ownerAvatarUrl} />
      <View style={styles.profileInfoContainer}>
        <ProfileInfo
          testID="repositoryName"
          color="textPrimary"
          fontSize="subheading"
          fontWeight="bold"
          value={fullName}
        />
        <ProfileInfo
          testID="repositoryDescription"
          color="textSecondary"
          value={description}
        />
        <ProfileInfo
          testID="repositoryLanguage"
          color="textSecondary"
          value={language}
          style={styles.tag}
        />
      </View>
    </View>
  );
};

export default ProfileInfoContainer;
