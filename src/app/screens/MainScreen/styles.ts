import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";
import { SEARCH_H } from '../../utils/constants/constants';

export const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    gap: spacing.md,
  },
  headerContainer: {
    height: 50,
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: spacing.xs,
    marginTop: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchStyle: {
    height: SEARCH_H,
    width: '100%',
    paddingHorizontal: spacing.xs,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.grey1,
  },
  searchTextStyle: {
    width: '100%',
    fontSize: 16,
    color: 'black',
    fontFamily: typography.primary.regular, 
    marginLeft: spacing.xs,
    paddingTop: 0, 
    paddingBottom: 0,
    paddingLeft: 0
    }
})