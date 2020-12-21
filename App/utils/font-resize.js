import { Dimensions, Platform, PixelRatio } from 'react-native';

const { scale } = Dimensions.get('window');

export function resizeFont(size) {
    const newSize = size * scale;

    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
}