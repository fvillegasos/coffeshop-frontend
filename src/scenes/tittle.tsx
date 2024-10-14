import '../index.css'

type Props = {}

const AppTittle = (props: Props) => {
    return (
        <div className='AppTittle' style={{display: 'flex', justifyContent: 'center', marginBottom: '10px'}}>
            <h1 style={{fontFamily: 'PilowlavaRegular', fontSize: '75px'}}>
                My coffee shop
            </h1>
        </div>
    )
}

export default AppTittle