/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Group3OverridesProps = {
    Group3?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 21"?: PrimitiveOverrideProps<ViewProps>;
    "Thank You \u3092\u9001\u308B"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Group3Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Group3OverridesProps | undefined | null;
}>;
export default function Group3(props: Group3Props): React.ReactElement;
