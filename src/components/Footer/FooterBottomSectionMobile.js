import React from 'react'
import PropTypes from 'prop-types'
import SocialLinksFooter from './SocialLinksFooter'
import FooterLinks from './FooterLinks'
// import Typography from '../Typography/Typography'
import FooterCountrySelector from './FooterCountrySelector'
import styles from './styles/FooterBottomSectionMobile-tw-styles'

export default function FooterBottomSectionMobile(props) {

    const countrySelectorDialogTitle = 'test'
    const { socialLinksCollection, footerLinksCollection, footerLogoCollection, 
        // copyright
    } = props
    return (
        <React.Fragment>
            <div className={styles.logoItemContainer}>
                {footerLogoCollection.items.map((logo, key) => {
                    return (
                        <img src={logo.url} alt='testing'></img>     
                    )
                })}
            </div>

            <SocialLinksFooter socialLinksCollection={socialLinksCollection} />
            <div className={styles.countrywrapper}>
                <FooterCountrySelector
                    dialogtitle={countrySelectorDialogTitle} />
            </div>
            <FooterLinks footerLinksCollection={footerLinksCollection} />
            {/* <Typography className={styles.copyrightStyles}>{copyright}</Typography> */}
        </React.Fragment>
    )
}

FooterBottomSectionMobile.propTypes = {
    socialLinksCollection: PropTypes.object,
    footerLinksCollection: PropTypes.object,
    footerLogoCollection: PropTypes.object,
    copyright: PropTypes.string
}
