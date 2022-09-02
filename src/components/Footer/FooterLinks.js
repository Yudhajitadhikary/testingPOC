import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import footerStyles from './styles/FooterLinks-tw-styles'

const FooterLinks=({ footerLinksCollection })=> {
    return (
        <div className={classnames(footerStyles.footeLinksWrapper)}>

            {footerLinksCollection && footerLinksCollection.items && footerLinksCollection.items.map((item, index) => {
                return item.linkText && (

                    <a href={item.link && item.link.url}
                        className={classnames(item.gaEventClass,item.customClass ? footerStyles.customClass : footerStyles.footeLinkStyles)}//, item.linkText.length > 9 ? 'w-1/2' : 'w-1/3'
                        tite={item.tooltip}
                        data-action-detail={item.gaEventLabel}
                        target={item.target}
                        key={index}

                    >
                        <div>Testing</div>
                        
                    </a>

                )
            }

            )}

        </div>
    )
    
}
FooterLinks.propTypes = {
    footerLinksCollection: PropTypes.object.isRequired
}

export default FooterLinks
