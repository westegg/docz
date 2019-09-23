/** @jsx jsx */
import { jsx } from 'theme-ui'
import { hooks, createThemeProvider } from 'docz-components'

import { Styled, ThemeProvider } from 'theme-ui'

import defaultTheme from '~theme'
import components from '~components'

const Theme = ({ children }) => {
  const { ComponentsProvider, useConfig } = hooks
  const config = useConfig()
  return (
    <ThemeProvider theme={config.themeConfig}>
      <ComponentsProvider components={components}>
        <Styled.root>{children}</Styled.root>
      </ComponentsProvider>
    </ThemeProvider>
  )
}

export const enhance = createThemeProvider(
  defaultTheme,
  ({
    mode = 'light',
    showPlaygroundEditor = true,
    showLiveError = true,
    ...config
  }) => ({
    ...config,
    showLiveError,
    showPlaygroundEditor,
    initialColorMode: mode,
  })
)

export default enhance(Theme)
