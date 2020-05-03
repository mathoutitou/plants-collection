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
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #0fbc63, -0.5rem 0 0 #0fbc63',
              backgroundColor: '#43cc87',
              color: 'white',
              padding: '1rem',
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
