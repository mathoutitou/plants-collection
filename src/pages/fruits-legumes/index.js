import React from 'react'

import Layout from '../../components/Layout'
import FruitsLegumesRoll from '../../components/FruitsLegumesRoll'

export default class FruitsLegumesIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/vegetables-1.jpg')`,
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
            Tous mes fruits & légumes
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <FruitsLegumesRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
