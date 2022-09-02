import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './styles/FooterMenuItemMobile-tw-styles'

const MenuSlotMobileItem = ({ menuSlot, setIndex, isSelected, index }) => {
    const headerRef = useRef()
    const bodyRef = useRef()
    useEffect(() => {
        if (!isSelected) {
            console.log('Hi!!')
        }
    })
    return (
        <React.Fragment>
            <button title={menuSlot.title} ref={headerRef} type='button' className={isSelected ? styles.menuSlotButtonOpen : styles.menuSlotButton} onClick={() => { setIndex(index, bodyRef.current) }}>
                {menuSlot.title}
                <span className={styles.plusIconWrapper}>
                    <div>Plus</div>
                    <span style={{ height: '1px' }} className={isSelected ? styles.minusIconOpen : styles.minusIcon} >H</span>
                </span>
            </button>
        </React.Fragment>
    )
}

MenuSlotMobileItem.propTypes = {
    menuSlot: PropTypes.object.isRequired,
    isSelected: PropTypes.bool,
    setIndex: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
}

MenuSlotMobileItem.defaultProps = {
    isSelected: false
}

export default MenuSlotMobileItem
