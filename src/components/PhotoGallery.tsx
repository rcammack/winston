import { useRef, useState } from 'react'
import type { SiteContent } from '../content-schema'
import content from '../content.yaml'
import PhotoLightbox from './PhotoLightbox'
import PhotoTile from './PhotoTile'
import SectionTitle from './SectionTitle'

type GalleryPhoto = SiteContent['photos']['items'][number]

function PhotoGallery() {
  const [openPhoto, setOpenPhoto] = useState<GalleryPhoto | null>(null)
  const lastPhotoTriggerRef = useRef<HTMLButtonElement | null>(null)

  return (
    <>
      <section className="photo-section" aria-labelledby="photos-title">
        <div className="photo-heading">
          <div>
            <SectionTitle
              headingId="photos-title"
              label="A little more Winston"
              title={content.photos.heading}
            />
          </div>
          <span>{content.photos.swipe_text}</span>
        </div>
        <div className="photo-strip">
          {content.photos.items.map((photo) => (
            <PhotoTile
              key={photo.file}
              photo={photo}
              onOpen={(selectedPhoto, trigger) => {
                lastPhotoTriggerRef.current = trigger
                setOpenPhoto(selectedPhoto)
              }}
            />
          ))}
        </div>
      </section>
      <PhotoLightbox
        photo={openPhoto}
        onClose={() => setOpenPhoto(null)}
        returnFocusTo={lastPhotoTriggerRef}
      />
    </>
  )
}

export default PhotoGallery
