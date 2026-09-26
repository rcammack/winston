import { useRef } from 'react'
import type { SiteContent } from '../content-schema'
import CommandPill from './CommandPill'

type Command = SiteContent['commands']['useful'][number]

type CommandListProps = {
  ariaLabel: string
  commands: Command[]
  onCommandBlur: () => void
  onCommandFocus: (command: Command) => void
  onCommandSelect: (command: Command) => void
  selectedCommand: Command
  scrollLabel: string
}

function CommandList({
  ariaLabel,
  commands,
  onCommandBlur,
  onCommandFocus,
  onCommandSelect,
  selectedCommand,
  scrollLabel,
}: CommandListProps) {
  const listRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: -1 | 1) => {
    listRef.current?.scrollBy({
      left: direction * 220,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    })
  }

  return (
    <div className="scrolling-skill-list">
      <button
        className="scroll-button"
        type="button"
        aria-label={`Scroll ${scrollLabel} left`}
        onClick={() => scroll(-1)}
      >
        ←
      </button>
      <div className="skill-list" aria-label={ariaLabel} ref={listRef}>
        {commands.map((command) => (
          <CommandPill
            command={command}
            isSelected={selectedCommand.name === command.name}
            key={command.name}
            onBlur={onCommandBlur}
            onFocus={onCommandFocus}
            onSelect={onCommandSelect}
          />
        ))}
      </div>
      <button
        className="scroll-button"
        type="button"
        aria-label={`Scroll ${scrollLabel} right`}
        onClick={() => scroll(1)}
      >
        →
      </button>
    </div>
  )
}

export default CommandList
