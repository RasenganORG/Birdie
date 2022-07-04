import { Button, Form, Upload, Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { TextArea } = Input;

const normFile = (e) => {
    console.log('Upload event:', e);
  
    if (Array.isArray(e)) {
      return e;
    }
  
    return e?.fileList;
  };


function EditProfileForm() {
    return ( 
        <Form style={{margin:'0 25%'}}>
            <Form.Item
            name="uploadBackground"
            label="Upload Background"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra="upload new background picture"
            >
                <Upload name="backgroundPic" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item
            name="uploadProfilePic"
            label="Upload Profile Picture"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra="upload new profile picture"
            >
                <Upload name="profilePic" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item>
                <Input placeholder="Name"/>
            </Form.Item>

            <Form.Item>
                <TextArea placeholder="Bio"/>
            </Form.Item>
        </Form>
    );
}

export default EditProfileForm;