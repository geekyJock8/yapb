import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"
import YapbNavbar from "./navbar/navbar"
import YapbFooter from "./footer/footer"

import "./global.css"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        {title}
      </h3>
    )
    return (
      <Wrapper className="flexbox-wrapper">
        <div className="yapb-content">
          <YapbNavbar></YapbNavbar>
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              marginTop: `5em`,
              maxWidth: rhythm(30),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
          >
            <header>{header}</header>
            <main>{children}</main>
          </div>
        </div>
        <YapbFooter></YapbFooter>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

export default Layout
