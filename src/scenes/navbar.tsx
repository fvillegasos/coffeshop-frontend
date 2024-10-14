import '../index.css'

type Props = {}

const navbar = (props: Props) => {

    const buttonsClassName = 'bg-white-500 hover:opacity-50 text-dark font-bold py-2 px-4 border border-black hover:border-opacity-50';

    return (
        <div className='grid grid-cols-5 content-between'>
            <button style={{fontFamily: 'MisoRegular', fontSize: '20px'}} className={`${buttonsClassName}`} name='menuButton'> MENU </button>
            <button style={{fontFamily: 'MisoRegular', fontSize: '20px'}} className={`${buttonsClassName}`} name='reserveButton'> RESERVE </button>
            <button style={{fontFamily: 'MisoRegular', fontSize: '20px'}} className={`${buttonsClassName}`} name='reserveButton'> CONTACT </button>
            <button style={{fontFamily: 'MisoRegular', fontSize: '20px'}} className={`${buttonsClassName}`} name='reserveButton'> SHOP </button>
            <button style={{fontFamily: 'MisoRegular', fontSize: '20px'}} className={`${buttonsClassName}`} name='aboutButton'> ABOUT </button>
        </div>
    )
}

export default navbar