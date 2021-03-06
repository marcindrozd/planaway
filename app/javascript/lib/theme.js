import { createMuiTheme } from '@material-ui/core/styles';
import { teal, pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: pink,
  },
  typography: {
    useNextVariants: true,
  },
});

export default theme;
