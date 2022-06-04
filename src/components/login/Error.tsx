import Box from '@mui/material/Box';
interface ErrorProps {
  message: string;
}
const Error = ({ message }: ErrorProps) => {
  return (
    <Box
      sx={{
        color: 'red',
        fontSize: '0.9rem',
        my: 2,
        textAlign: 'center',
      }}
    >
      {message}
    </Box>
  );
};
export default Error;
