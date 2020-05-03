import React from 'react'
import PropTypes from 'prop-types'
import { FruitsLegumesTemplate } from '../../templates/fruits-legumes'

const FruitsLegumesPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <FruitsLegumesTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

FruitsLegumesPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FruitsLegumesPreview
