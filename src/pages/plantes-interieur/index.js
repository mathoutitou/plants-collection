import React from 'react'

import Layout from '../../components/Layout'
import PlantesInteRoll from '../../components/PlantesInteRoll'

export default class PlantesInteIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(15, 188, 99) 0.5rem 0px 0px, rgb(15, 188, 99) -0.5rem 0px 0px',
            backgroundColor: 'rgb(67, 204, 135)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
            Toutes mes plantes d'intérieur
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <PlantesInteRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
