import React from 'react'
import PropTypes from 'prop-types'
import { PlantesPotaTemplate } from '../../templates/plantes-potageres'

const PlantesPotaPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <PlantesPotaTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

PlantesPotaPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PlantesPotaPreview
