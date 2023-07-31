// CarDetails.js
import styles from './CarDetails.module.css';

const CarDetails = ({ modelo, km, cor }) => {
    return (
        <div>
            <h1 className={styles.my_car_details}>Car Details</h1>
            <div>
                <div className={styles.my_car_modelo}>Modelo: {modelo}</div>
                <div className={styles.my_car_km}>KM: {km}</div>
                <div className={styles.my_car_cor}>Cor: {cor}</div>
            </div>
        </div>
    )
}

export default CarDetails