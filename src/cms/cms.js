import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import PlantesIntePreview from './preview-templates/PlantesIntePreview'
import FruitsLegumesPreview from './preview-templates/FruitsLegumesPreview'
import PlantesPotaPreview from './preview-templates/PlantesPotaPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('plantes-interieur', PlantesIntePreview)
CMS.registerPreviewTemplate('plantes-interieur', FruitsLegumesPreview)
CMS.registerPreviewTemplate('plantes-interieur', PlantesPotaPreview)
