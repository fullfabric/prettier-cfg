import React from 'react'

import i18n from 'i18next'

import { render } from '@testing-library/react'
import { Text } from '@fullfabric/alma-mater'

import renderApp from 'spec/helpers'

import Header from 'components/Header'
import locales from 'i18n/locales/en'
import Body from '../Body'
import Footer from './Footer'

import classNames from 'classnames'
import footerStyles from './Footer/styles.module.scss'
import styles from 'components/Header/styles.module.scss'

/**
 * Only used to run prettier against this, mostly as a way to check the config
 * is valid.
 */
export default function noop() {
  return null
}
