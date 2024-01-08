import { Box, IBoxProps, ZStack, getStyleElement } from "native-base";
import { ColorType } from "native-base/lib/typescript/components/types";
import React, { useState } from "react";

interface IProps extends IBoxProps {
  progress: number;
  backgroundColor: ColorType;
  color: ColorType;
}

const width = getStyleElement();

export const ProgressBar: React.FC<IProps> = ({
  progress,
  backgroundColor,
  color,
  ...rest
}) => {
  const [width, setWidth] = useState(0);

  return (
    <ZStack height="15px" width="90%">
      <Box
        onLayout={(event) => {
          setWidth(event.nativeEvent.layout.width);
        }}
        backgroundColor={backgroundColor}
        borderRadius={50}
        width="100%"
        height="15px"
        alignSelf="center"
      />
      <Box
        flex={1}
        backgroundColor={color}
        width={width * progress}
        borderRadius={50}
        height="15px"
      />
    </ZStack>
  );
};
