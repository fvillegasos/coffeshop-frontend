import '../index.css'

type Props = {}

const AppTittle = (props: Props) => {
    return (
        <div className='AppTittle' style={{display: 'flex', justifyContent: 'center'}}>
            <h1 style={{fontFamily: 'Pilowlava-Regular', fontSize: '55px'}}>
                My coffee shop
            </h1>
        </div>
    )
}

export default AppTittle