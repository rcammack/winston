import type { SiteContent } from '../content-schema'
import CareCardTitle from './CareCardTitle'

type CareCardProps = {
  card: SiteContent['care']['groups'][number]['cards'][number]
}

function CareCard({ card }: CareCardProps) {
  return (
    <article className="care-card">
      <div className="care-card-heading">
        <CareCardTitle title={card.title} />
        <span
          className={
            card.image ? 'card-visual card-visual-image' : 'card-visual'
          }
          aria-hidden="true"
        >
          {card.image ? (
            <img
              src={`${import.meta.env.BASE_URL}${card.image}`}
              alt=""
            />
          ) : card.emoji}
        </span>
      </div>
      <p>{card.text}</p>
    </article>
  )
}

export default CareCard
