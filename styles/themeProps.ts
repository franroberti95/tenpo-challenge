import {ThemeProps as StyledThemeProps} from 'styled-components/native';
import {mainTheme} from './theme';

export type ThemeProps = StyledThemeProps<typeof mainTheme>;
