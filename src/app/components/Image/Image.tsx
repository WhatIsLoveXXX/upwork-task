import { Box, BoxProps } from "@mui/material";

type ImageProps = {
  src: string;
  alt?: string;
} & BoxProps;

const Image = ({ alt, src, ...rest }: ImageProps) => {
  return <Box component="img" alt={alt} src={src} {...rest} />;
};

export default Image;
