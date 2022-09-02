import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles/FooterNavigation-tw-styles'
import FooterMenuSlotsMobile from './FooterMenuSlotsMobile'
import  FooterMenuSlotDesktop from './FooterMenuSlotDesktop'

export class FooterNavigation extends Component {

    static propTypes = {
        menuSlotsCollection: PropTypes.object
    }

    static defaultProps = {
        className: ''
    }

    constructor(props) {
        super(props)
        this.state = {
            screenWidth: '',
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange)
        // window.addEventListener('scroll', this.handleWindowSizeChange)
        window.addEventListener('load', this.handleWindowSizeChange)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange)
        // window.removeEventListener('scroll', this.handleWindowSizeChange)
        window.removeEventListener('load', this.handleWindowSizeChange)
    }

    handleWindowSizeChange = () => {
        this.setState({ screenWidth: window.innerWidth })
    }

    render() {
        const { menuSlotsCollection } = this.props
        const isTabletLandscape = true
        return (
            <div className={classNames(styles.footerNavigation)}>
                {isTabletLandscape ? (
                    <FooterMenuSlotDesktop menuSlots={menuSlotsCollection.items} />
                ) : (
                    <div key='footerNavMobile' className={classNames(styles.footerMenuSlotsWrapperMobile)}>
                        <FooterMenuSlotsMobile menuSlots={menuSlotsCollection.items} />
                    </div>
                )}
            </div>
        )
    }
}

export default FooterNavigation
