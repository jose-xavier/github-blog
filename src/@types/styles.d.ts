import { defaultTheme } from '../styles/themes/default'
import 'styled-componets'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
