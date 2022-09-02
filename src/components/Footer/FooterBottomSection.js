import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FooterBootomSectionMobile from './FooterBottomSectionMobile'
import FooterBootomSectionDesktop from './FooterBottomSectionDesktop'
// import configuration from '../../constants/configuration'

export class FooterBottomSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            screenWidth: 0,
        }
    }

    static propTypes = {
        socialLinksCollection: PropTypes.object,
        footerLinksCollection: PropTypes.object,
        footerLogoCollection: PropTypes.object,
        copyright: PropTypes.string
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
        const { socialLinksCollection, footerLinksCollection, footerLogoCollection, copyright } = this.props
        const { screenWidth } = this.state
        const isTabletLandscape=true
        // const isTabletLandscape = screenWidth && screenWidth >= configuration.tabletLandscapte

        return (
            <React.Fragment>
                {isTabletLandscape ? (
                    <div key='footerBottomSectionDesktop'>
                        <FooterBootomSectionDesktop socialLinksCollection={socialLinksCollection} footerLinksCollection={footerLinksCollection} footerLogoCollection={footerLogoCollection} copyright={copyright} />
                    </div>
                ) : (
                    <div key='footerBottomSectionMobile'>
                        <FooterBootomSectionMobile socialLinksCollection={socialLinksCollection} footerLinksCollection={footerLinksCollection} footerLogoCollection={footerLogoCollection} copyright={copyright} />
                    </div>
                )}
            </React.Fragment>
        )
    }
}

export default FooterBottomSection
