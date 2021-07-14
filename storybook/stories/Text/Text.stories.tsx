import React from 'react';
import { color as color2, text, boolean, select } from '@storybook/addon-knobs';

// import Icon from '@mdi/react';
// import * as Icons from '@mdi/js';
import { storiesOf } from '@storybook/react-native';

import Text from '../../../src/components/Text';
import colors from '../../../src/enums/colors';
import { View } from '../../../src/baseElements';

const design = {
  type: 'figma',
  url: 'https://www.figma.com/file/3r2G00brulOwr9j7F6JF59/Generic-UI-Style?node-id=83%3A17',
};

// const options = {
//   none: '',
// //   ...Icons,
// };

storiesOf('Text', module)
  .addParameters({ component: Text })
  .addDecorator(getStory => <View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: '50%',
  }}><View>{getStory()}</View></View>)
  .add(
    'Default',
    () => {
    //   const getIconPath = (path: string) =>
        // path ? <Icon size={text('size', '1rem')} path={path} /> : undefined;

      return (
        <Text
          size={text('size', 1)}
          color={color2('color', colors.grayDark)}
        //   iconPrefix={getIconPath(select('iconPrefix', options, options.mdiComment))}
        //   iconSuffix={getIconPath(select('iconSuffix', options, options.mdiComment))}
          isProcessing={boolean('isProcessing', false)}
          isLoading={boolean('isLoading', false)}
        >
          {text('children', 'Lorem ipsum dolor sit amet.')}
        </Text>
      );
    },
    { design },
  );
