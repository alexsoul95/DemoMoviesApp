import { StyleSheet} from 'react-native';
import { useStore } from '../../state';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

const commonStyles = StyleSheet.create({
  shadow: {
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm
  },

  absoluteCenter: {
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  inputText: {
    width: '100%',
    fontSize: 16,
    color: 'black',
    fontFamily: typography.primary.regular,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    
  },
  buttonStyle: {
    padding: spacing.sm,
    borderRadius: 10, 
    width: '100%', 
    backgroundColor: useStore.getState().global.colors.primary, 
    alignItems: 'center'
  }
});

export {commonStyles};