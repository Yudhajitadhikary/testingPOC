import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Fade from 'react-reveal/Fade'

import FooterNavigation from './FooterNavigation'
import footerStyles from './styles/Footer-tw-styles'
import FooterBottomSection from './FooterBottomSection'

const Footer = ({ footer, breadcrumbData}) => {
    const { socialLinksCollection, footerLinksCollection, menuSlotsCollection, footerLogoCollection, copyright } = footer
    return (
        <Fade bottom>
            <footer className={classNames(footerStyles.footerWrapper)}>
                {breadcrumbData && breadcrumbData.length > 1 && (
                    <div className={classNames(footerStyles.footerBreadcrumb)}>
                    </div>
                )}
                <hr className={classNames(footerStyles.footerHr)} />
                <div id='footerContent' className={classNames(footerStyles.footerContentWrapper)}>
                    <div className={footerStyles.footerContent}>
                        <FooterNavigation menuSlotsCollection={menuSlotsCollection} />
                        <FooterBottomSection socialLinksCollection={socialLinksCollection} footerLinksCollection={footerLinksCollection} footerLogoCollection={footerLogoCollection} copyright={copyright} />
                    </div>
                </div>
            </footer>
        </Fade>
    )

}
Footer.propTypes = {
    footer: PropTypes.object.isRequired,
    breadcrumbData: PropTypes.array
}

export default Footer
