import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles/FooterMenuSlotDesktop-tw-styles'

const FooterMenuSlotDesktop = ({ menuSlots }) => {
    return menuSlots.map((menuSlot, index) => (
        menuSlot.isDesktop && <div key={index} className={styles.menuWrapper}>
            <ul className={styles.menuUl}>
                {menuSlot.title && (
                    <li className={styles.menuCategoryHeadingWrapper} >
                        <button id='Click' onClick={console.log('Checked')}/>
                    </li>
                )}
                {menuSlot.menuItemsCollection && menuSlot.menuItemsCollection.items && menuSlot.menuItemsCollection.items.map((menuItem) => (
                    <li key={menuItem.sys.id} className={styles.menuCategoryItem}>
                        <a title={menuItem.gaEventLabel} data-action-detail={menuItem.gaEventLabel} className={menuItem.gaEventClass} href={menuItem.link && menuItem.link.url}>
                            {menuItem.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    ))

}
FooterMenuSlotDesktop.propTypes = {
    menuSlots: PropTypes.arrayOf(Object)
}
export default FooterMenuSlotDesktop
