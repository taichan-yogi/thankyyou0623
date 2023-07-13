/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Group4OverridesProps = {
    Group4?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 20"?: PrimitiveOverrideProps<ViewProps>;
    "ThankYouPoint\u4EA4\u63DB"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Group4Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Group4OverridesProps | undefined | null;
}>;
export default function Group4(props: Group4Props): React.ReactElement;
