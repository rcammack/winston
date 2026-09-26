import { useEffect, useRef } from 'react'
import type { SiteContent } from '../content-schema'

type GalleryPhoto = SiteContent['photos']['items'][number]

type PhotoLightboxProps = {
  onClose: () => void
  photo: GalleryPhoto | null
  returnFocusTo: React.RefObject<HTMLButtonElement | null>
}

function PhotoLightbox({
  onClose,
  photo,
  returnFocusTo,
}: PhotoLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (photo && !dialogRef.current?.open) {
      dialogRef.current?.showModal()
    }
  }, [photo])

  const closeDialog = () => {
    dialogRef.current?.close()
  }

  return (
    <dialog
      className="lightbox"
      ref={dialogRef}
      aria-label={photo?.description ?? 'Photo viewer'}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeDialog()
      }}
      onClose={() => {
        onClose()
        requestAnimationFrame(() => returnFocusTo.current?.focus())
      }}
    >
      {photo && (
        <div className="lightbox-content">
          <button
            className="lightbox-close"
            type="button"
            aria-label="Close photo"
            autoFocus
            onClick={closeDialog}
          >
            ×
          </button>
          <img
            src={`${import.meta.env.BASE_URL}${photo.file}`}
            alt={photo.description}
          />
        </div>
      )}
    </dialog>
  )
}

export default PhotoLightbox
