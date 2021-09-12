import { RefObject } from 'react';
import { View, LayoutChangeEvent } from 'react-native';
export declare type Direction = 'top' | 'bottom' | 'left' | 'right';
interface HiddenLocations {
    isDefault: boolean;
    top: number;
    bottom: number;
    left: number;
    right: number;
}
export interface HiddenLocationsProps<T extends View> {
    containerRef: RefObject<T>;
}
export default function useHiddenLocation<T extends View>(props: HiddenLocationsProps<T>): {
    onLayout: (event: LayoutChangeEvent) => void;
    hiddenLocations: HiddenLocations;
};
export {};
