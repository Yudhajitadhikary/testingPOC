import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles/FooterCountrySelector-tw-styles'

export class CountrySelectorPopUp extends Component {
    state = {
        open: false,
    };

    // handleClickOpen = () => {
    //     this.setState({ open: true })
    // };

    // handleClose = () => {
    //     this.setState({ open: false })
    // }

    render() {
        const selectedCountry = 'Test'
        return (
            <React.Fragment>
                
                    <img src='/static/images/flagImage.jpg' width='32px' height='24px' className={styles.countryIcon} alt={'testing'} />
                    <span className={styles.countryName}>{selectedCountry}</span>

            </React.Fragment>
        )
    }
}

export default CountrySelectorPopUp

CountrySelectorPopUp.propTypes = {

    dialogtitle: PropTypes.string
}
