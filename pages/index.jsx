import {
  Layout,
  PageHeader,
  Button
} from 'antd';
import "./style.less";
import Link from 'next/link';
import { MDXProvider } from '@mdx-js/react';
import Welcome from './welcome.md';
import EmailListForm from '../components/EmailListForm/EmailListForm';
import GraphQLDemo from '../components/GraphQLDemo/GraphQLDemo';

const { Content, Footer } = Layout;

const components = {
  wrapper: props => (
    <div style={{ padding: '8px 32px' }}>
      <main {...props} />
    </div>
  )
};

const headerIcon = require('../static/favicon/icons-192.png?webp?resize&size=48');

export default () => (

  <Layout>
    <PageHeader title="Template"
      avatar={{
        src: headerIcon
      }}
      extra={[
        <Button href="https://github.com/timothymiller/mern-ant-design-graphql-next-template"
          key="2">View Source Code</Button>,
        <Link href="/privacy-policy">
          <Button key="1" type="primary">View Privacy Policy</Button>
        </Link>,
      ]}>
    </PageHeader>
    <Content>
      <GraphQLDemo></GraphQLDemo>
      <EmailListForm></EmailListForm>
      <MDXProvider components={components}>
        <Welcome />
      </MDXProvider>
    </Content>
    <Footer style={{ textAlign: 'center', padding: '32px' }}>This is a footer</Footer>
  </Layout>
)