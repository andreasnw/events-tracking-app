import { StyleSheet } from 'react-native';
import { resizeFont } from '@utils/font-resize';

const basic = StyleSheet.create({
  mainText: {
    fontSize: resizeFont(18),
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: resizeFont(16),
  },
})

export default basic;
