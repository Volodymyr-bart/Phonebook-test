import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 2),
  alignItems: 'center',
  height: '100%',
}));
