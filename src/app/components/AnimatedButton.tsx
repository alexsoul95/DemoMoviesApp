import {ReactNode} from 'react';
import {Pressable, Animated, PressableProps} from 'react-native';

interface AnimatedButtonProps extends PressableProps {
  children: ReactNode;
}
const AnimatedButton = ({children, ...props}: AnimatedButtonProps) => {
  const animated = new Animated.Value(1);

  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{opacity: animated, justifyContent: 'center'}}>
      <Pressable onPressIn={fadeIn} onPressOut={fadeOut} {...props}>
        {children}
      </Pressable>
    </Animated.View>
  );
};

export default AnimatedButton;
