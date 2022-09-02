import React from 'react'
import PropTypes from 'prop-types'

import FooterStyles from './styles/SocialLinksFooter-tw-styles'

const SocialLinksFooter = ({ socialLinksCollection }) => {
    return (
        <div className={FooterStyles.socialLinksWrapper}>

            <ul className={FooterStyles.footernav}>
                {socialLinksCollection &&
                    socialLinksCollection.items &&
                    socialLinksCollection.items.map((item, index) => {
                        return (
                            <li key={index} className={FooterStyles.socialIconWrapper}>
                                <a
                                    href={item.link.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className={item.gaEventClass}
                                    data-action-detail={item.gaEventLabel}
                                    title={item.title}
                                    key={index}
                                >
                                    <img src={item.image.url} alt='test' />
                                </a>
                            </li>

                        )
                    })}

            </ul>
        </div>
    )

}

SocialLinksFooter.propTypes = {
    locale: PropTypes.string,
    socialConnectData: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.any, PropTypes.object])
    ),
    socialLinksCollection:PropTypes.object
}
export default SocialLinksFooter