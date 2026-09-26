import type { SiteContent } from '../content-schema'

type CareCardProps = {
  card: SiteContent['care']['cards'][number]
}

function CareCard({ card }: CareCardProps) {
  return (
    <article className="care-card">
      <span className="card-visual" aria-hidden="true">
        {card.image ? (
          <img src={`${import.meta.env.BASE_URL}${card.image}`} alt="" />
        ) : card.emoji}
      </span>
      <h3>{card.title}</h3>
      <p>{card.text}</p>
    </article>
  )
}

export default CareCard
