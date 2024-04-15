import '../sass/components/_section_title.scss'

interface IProps {
    title: string
}

const SectionTitle = ({ title }: IProps) => {
  return (
    <div className='section-title'>
        <div className='section-title__bar'></div>
        <p className='section-title__title'>{title}</p>
        <div className='section-title__bar'></div>
    </div>
  )
}

export default SectionTitle