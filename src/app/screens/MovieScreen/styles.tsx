import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 50, 
    paddingBottom: spacing.md,
  },
  imageContainer: {
    width: '100%',
    height: undefined,
    aspectRatio: 0.675,
    top: 0,
    left: 0,
    right: 0
  },
  headerAbsolute: {
    backgroundColor: colors.primary,
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, 
    zIndex: 10, 
    paddingHorizontal: spacing.md
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0, 
    left: 0, 
    right: 0, 
    zIndex: 10, 
    paddingHorizontal: spacing.md,
    gap: spacing.sm
  },
  contentContainer: {
    paddingHorizontal: spacing.md,
  },
  keywordsContainer: {
    flex: 1, 
    flexDirection: 'row', 
    flexWrap: 'wrap',
    gap: spacing.sm
  }
});