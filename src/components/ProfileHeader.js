import { Button, PageHeader, Row, Statistic, Image, Avatar, Col } from "antd"
import { Link } from "react-router-dom"
import "antd/dist/antd.min.css"
import "../index.css"

function ProfileHeader() {
  return (
    <>
      <PageHeader
        // style={{ margin: "0 25%", padding: "0" }}
        onBack={() => window.history.back()}
        title='Han Solo'
        subTitle='1 tweet'
        extra={[
          <Link to='edit'>
            <Button key='1' type='primary'>
              Edit Profile
            </Button>
          </Link>,
        ]}
      >
        <Image.PreviewGroup>
          <Image
            width={200}
            src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
          />
        </Image.PreviewGroup>

        <Avatar
          style={{
            display: "block",
          }}
          size={{
            xs: 24,
            sm: 32,
            md: 40,
            lg: 64,
            xl: 80,
            xxl: 90,
          }}
          src='https://joeschmoe.io/api/v1/random'
        />
        <Row>
          <Col>
            <h4>Han Solo</h4>
            <p>@han_solo</p>
          </Col>
        </Row>

        <Row>
          <Statistic
            title='Followers'
            value='20'
            style={{ paddingRight: "1vw" }}
          />
          <Statistic title='Following' value={5} />
        </Row>
      </PageHeader>
    </>
  )
}

export default ProfileHeader
