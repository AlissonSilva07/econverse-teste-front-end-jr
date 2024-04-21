import '../sass/components/_section_title.scss'

interface IProps {
    title: string
    sub: string
}

const SectionTitle = ({ title, sub }: IProps) => {
  return (
    <>
      <section className='section-title'>
          <div className='section-title__bar'></div>
          <p className='section-title__title'>{title}</p>
          <div className='section-title__bar'></div>
      </section>
      <div className='section-sub'>
        <p className='section-sub__text'>{sub}</p>
      </div>
    </>
  )
}

export default SectionTitle