import React from 'react'
import { logEvent } from '../utils/analytics'

/* MATERIAL IMPORT */
import { Card, CardTitle, CardActions, CardMedia } from 'material-ui/Card'

import FlatButton from 'material-ui/FlatButton'

const LetterHeadCard = ({ image, title, url, actionText }) => {
  return (
    <div
      className='col s12 m6 letterhead-card'
      style={{ paddingBottom: '0.75rem' }}
    >
      <Card>
        <CardMedia>
          <img src={image} alt={title} />
        </CardMedia>

        <CardTitle title={title} />

        <CardActions>
          <FlatButton
            label={actionText}
            href={url}
            onClick={() => logEvent('Letter Head Download', title)}
          />
        </CardActions>
      </Card>
    </div>
  )
}

export default LetterHeadCard
