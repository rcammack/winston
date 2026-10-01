import type { SiteContent } from '../content-schema'
import CareCard from './CareCard'

type CareGroupProps = {
  group: SiteContent['care']['groups'][number]
}

function CareGroup({ group }: CareGroupProps) {
  return (
    <section className="care-group">
      <h3>{group.heading}</h3>
      <div className="care-grid">
        {group.cards.map((card) => (
          <CareCard card={card} key={card.title} />
        ))}
      </div>
    </section>
  )
}

export default CareGroup
