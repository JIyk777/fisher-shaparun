import Box from 'components/Box';

const MenuIcon = ({ children, width, height, borderRadius = 1 }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={width}
      height={height}
      bg="menuBtnColor"
      borderRadius={borderRadius}
    >
      {children}
    </Box>
  );
};

export default MenuIcon;
