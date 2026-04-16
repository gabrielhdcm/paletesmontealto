type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
  theme?: 'light' | 'dark'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
}: SectionHeadingProps) {
  const alignmentClass = align === 'center' ? 'mx-auto text-center' : 'text-left'
  const eyebrowClass = theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'
  const titleClass = theme === 'dark' ? 'text-slate-100' : 'text-slate-900'
  const descriptionClass = theme === 'dark' ? 'text-slate-300' : 'text-slate-600'

  return (
    <div className={`max-w-3xl ${alignmentClass}`}>
      <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${eyebrowClass}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 font-display text-2xl leading-tight sm:text-3xl sm:leading-tight lg:text-5xl ${titleClass}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-7 sm:text-lg ${descriptionClass}`}>{description}</p>
    </div>
  )
}