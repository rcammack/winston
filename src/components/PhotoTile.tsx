import type { SiteContent } from '../content-schema'

type GalleryPhoto = SiteContent['photos']['items'][number]

type PhotoTileProps = {
  onOpen: (photo: GalleryPhoto, trigger: HTMLButtonElement) => void
  photo: GalleryPhoto
}

function PhotoTile({ onOpen, photo }: PhotoTileProps) {
  return (
    <button
      className="photo-tile"
      type="button"
      aria-label={`Open ${photo.description}`}
      onClick={(event) => onOpen(photo, event.currentTarget)}
    >
      <img
        src={`${import.meta.env.BASE_URL}${photo.file}`}
        alt=""
        loading="lazy"
      />
    </button>
  )
}

export default PhotoTile
