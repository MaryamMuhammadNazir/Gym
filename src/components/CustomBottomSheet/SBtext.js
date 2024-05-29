import React from 'react';
import { LongPressGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
// import Constants from 'expo-constants';
// import {SBTextItem} from './SBTextitem';
import SBImageItem from './SBImageItem'; import { SBTextItem } from './SBTextItem';


const SBItem = props => {
  const {
    style,
    showIndex = true,
    index,
    pretty,
    img,
    testID,
    ...animatedViewProps
  } = props;
  const enablePretty = false;
  const [isPretty, setIsPretty] = React.useState(pretty || enablePretty);
  return (
    <LongPressGestureHandler
      onActivated={() => {
        setIsPretty(!isPretty);
      }}>
      <Animated.View testID={testID} style={{ flex: 1 }} {...animatedViewProps}>
        {isPretty || img ? (
          <SBImageItem
            style={{ height: 1000, width: 100 }}
            index={index}
            showIndex={typeof index === 'number' && showIndex}
            img={img}
          />
        ) : (
          <SBTextItem style={style} index={index} />
        )}
      </Animated.View>
    </LongPressGestureHandler>
  );
};

export default SBItem;
