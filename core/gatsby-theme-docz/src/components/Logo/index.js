/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Link } from 'gatsby'
import { hooks } from 'docz-components'

import * as styles from './styles'

export const Logo = () => {
  const { useConfig } = hooks
  const config = useConfig()
  return (
    <Flex aligmItems="center" sx={styles.logo} data-testid="logo">
      <Link to="/" sx={styles.link}>
        {config.title}
      </Link>
    </Flex>
  )
}
