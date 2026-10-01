import { useState } from 'react'
import type { SiteContent } from '../content-schema'
import content from '../content.yaml'
import CommandList from './CommandList'
import SectionTitle from './SectionTitle'

type Command = SiteContent['commands']['useful'][number]

function CommandsSection() {
  const communicationCommands = content.commands.useful
  const [hoveredCommand, setHoveredCommand] = useState<Command | null>(null)
  const [selectedCommand, setSelectedCommand] = useState<Command>(
    communicationCommands[0],
  )
  const visibleCommand = hoveredCommand ?? selectedCommand

  const selectCommand = (command: Command) => {
    setHoveredCommand(null)
    setSelectedCommand(command)
  }

  return (
    <section
      className="section skills"
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          setHoveredCommand(null)
          setSelectedCommand(communicationCommands[0])
        }
      }}
    >
      <div>
        <SectionTitle
          label="Commands Winston knows"
          title={content.commands.heading}
        />
        <p>{content.commands.description}</p>
      </div>
      <div className="command-panel">
        <div className="command-group">
          <h3>Useful commands</h3>
          <CommandList
            ariaLabel="Useful commands for Winston"
            commands={communicationCommands}
            onCommandBlur={() => setHoveredCommand(null)}
            onCommandFocus={setHoveredCommand}
            onCommandSelect={selectCommand}
            selectedCommand={selectedCommand}
          />
        </div>
        <div className="command-group">
          <h3>Tricks for treats</h3>
          <CommandList
            ariaLabel="Winston's tricks"
            commands={content.commands.tricks}
            onCommandBlur={() => setHoveredCommand(null)}
            onCommandFocus={setHoveredCommand}
            onCommandSelect={selectCommand}
            selectedCommand={selectedCommand}
          />
        </div>
        <div
          className="command-detail"
          key={visibleCommand.name}
          role="status"
        >
          <span>{content.commands.detail_prefix} “{visibleCommand.name}”</span>
          <strong>{visibleCommand.details}</strong>
        </div>
        <div className="other-words">
          <h3>Other words Winston knows</h3>
          <p>{content.commands.other_words}</p>
        </div>
      </div>
    </section>
  )
}

export default CommandsSection
