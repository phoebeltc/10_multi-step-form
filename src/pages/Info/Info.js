import styles from './info.scss';
import Header from '../../components/Header/Header';

const Info = () => {
    return <>
    <div className='main'>
        <div className='container'>
            <Header />
            <div className="form">
                <div className="content">
                    <h1>Personal Info</h1>
                    <p>Please provide your name, email address, and phone number.</p>
                    <form>
                        <p>
                            <input></input>
                            <label></label>
                        </p>
                    </form>
                </div>
                <div className="footer">footer</div>
            </div>
        </div>
    </div>
    </>
}

export default Info; 