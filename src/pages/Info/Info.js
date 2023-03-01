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
                            <label for="name">Name</label>
                            <input type="text" name="name" placeholder="e.g. Stephen King" required></input>
                        </p>
                        <p> 
                            <label for="email">Email Address</label>
                            <input type="text" name="email" placeholder="e.g. stephenking@lorem.com" required></input>
                        </p>
                        <p>
                            <label for="phone">Phone Number</label>
                            <input type="text" name="phone" placeholder="e.g. +1 234 567 890" required></input>
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