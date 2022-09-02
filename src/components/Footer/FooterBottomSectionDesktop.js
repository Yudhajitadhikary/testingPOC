import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import SocialLinksFooter from './SocialLinksFooter'
import FooterLinks from './FooterLinks'
// import Typography from '../Typography/Typography'
import FooterCountrySelector from './FooterCountrySelector'
import styles from './styles/FooterBottomSectionDesktop-tw-styles'

export default function FooterBottomSectionDesktop(props) {
    const countrySelectorDialogTitle = 'Test'
    const { socialLinksCollection, footerLinksCollection, footerLogoCollection, 
        // copyright
    } = props
    return (
        <React.Fragment>
            <div className={styles.bottomWrapper}>
                <div className={styles.footerMiddleWrapper}>
                    <div className={styles.logoItemContainer}>
                        {footerLogoCollection.items.map((logo, key) => {
                            return (
                                <img src={logo.url} alt='testing'></img>
                            )
                        })}
                    </div>
                    <SocialLinksFooter socialLinksCollection={socialLinksCollection} />
                    <div className={styles.countrywrapper}>
                        <FooterCountrySelector dialogtitle={countrySelectorDialogTitle} />
                    </div>
                </div>
                <hr className={styles.borderTop} />
                <hr className={styles.borderBottom} />
                <div className={styles.bottomLine}>
                    {/* <Typography className={styles.copyrightStyles}>{copyright}</Typography> */}
                    <FooterLinks footerLinksCollection={footerLinksCollection} />
                </div>
            </div>

        </React.Fragment>
    )
}
FooterBottomSectionDesktop.propTypes = {
    socialLinksCollection: PropTypes.object,
    footerLinksCollection: PropTypes.object,
    footerLogoCollection: PropTypes.object,
    copyright: PropTypes.string
}

