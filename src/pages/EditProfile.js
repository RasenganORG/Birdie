import Navbar from "../components/Navbar";
import EditProfileForm from "../components/EditProfileForm";
import { Button, Descriptions, PageHeader, Row, Statistic, Tag } from 'antd';

function EditProfile() {
    return (
        <>
            <Navbar tab="profile"/>
            <PageHeader
                onBack={() => window.history.back()}
                title="Edit Profile"
                extra={[
                    <Button key="1" type="primary">
                    Save
                    </Button>,
                ]}
            >
            </PageHeader>
            <EditProfileForm />
        </>
    );
}

export default EditProfile;