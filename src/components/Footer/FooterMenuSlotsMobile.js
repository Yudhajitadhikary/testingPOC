import React from 'react'
import PropTypes from 'prop-types'
import FooterMenuItemMobile from './FooterMenuItemMobile'
import styles from './styles/FooterMenuSlotMobile-tw-styles'

const FooterMenuSlotsMobile = ({ menuSlots,selectedIndex,setIndex }) => {
    return (
        <div>
            {menuSlots.map((menuSlot, index) => {
                const isSelected = selectedIndex === index
                return (
                    menuSlot.menuItemsCollection.items && menuSlot.menuItemsCollection.items.length > 0 ? (
                        menuSlot.isMobileOnly &&
                        <FooterMenuItemMobile index={index} key={index} isSelected={isSelected} menuSlot={menuSlot} setIndex={setIndex('x','y')} />
                    ) : (
                        <a title={menuSlot.title} className={styles.menuSlotAnchor} key={index} href={menuSlot.link && menuSlot.link.url}>
                            {menuSlot.title}
                        </a>
                    )
                )
            })}
        </div>
    )

}
FooterMenuSlotsMobile.propTypes =
{
    menuSlots: PropTypes.arrayOf(Object)
}

export default FooterMenuSlotsMobile
