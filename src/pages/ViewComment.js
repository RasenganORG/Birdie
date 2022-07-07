import 'antd/dist/antd.min.css';
import '../index.css';
import { PageHeader } from 'antd';
import Navbar from '../components/Navbar';
import TweetPost from '../components/TweetPost';
import TweetComment from '../components/TweetComment';

function ViewComment() {
    return ( 
        <>
            <Navbar tab="logo"/>
                <PageHeader
                style={{margin: '0 25%' ,padding: '0'}}
                // className='align-middle'
                onBack={() => window.history.back()}
                title="Tweet"
                />
            <TweetPost viewComment={true}/>
        </>
     );
}

export default ViewComment;