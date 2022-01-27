/// <reference types="react" />
import './mylabel.css';
export interface Props {
    /**
    * Is the text of the label
    */
    label: string;
    /**
     * How large should the label be?
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * texto en mayusculas o minuculas
     */
    allCaps: boolean;
    /**
    * color del texto
    */
    colorClass: 'primary' | 'secondary' | 'tertiary';
    /**
   * What background color to use
   */
    color?: string;
}
/**
 * Primary UI component for user interaction
 */
export declare const MyLabel: ({ label, size, allCaps, colorClass, color, ...props }: Props) => JSX.Element;
