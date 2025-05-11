import React, { useState } from 'react';
import {
  Button,
  Dropdown,
  Menu,
  Modal,
  Drawer,
  Card,
  Tooltip,
  Tag,
  Space,
  message,
  Collapse,
  Input,
  Select
} from 'antd';
import {
  MenuOutlined,
  BellOutlined,
  UserOutlined,
  SettingOutlined,
  InfoCircleOutlined,
  SearchOutlined,
  PlusOutlined,
  DeleteOutlined
} from '@ant-design/icons';

const { Panel } = Collapse;
const { Option } = Select;

interface AntLayoutProps {
  title: string;
  description: string;
}

export function AntLayout({ title, description }: AntLayoutProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [messageApi, contextHolder] = message.useMessage();

  // Dropdown menu items
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: 'Profile',
          icon: <UserOutlined />,
        },
        {
          key: '2',
          label: 'Settings',
          icon: <SettingOutlined />,
        },
        {
          key: '3',
          label: 'Logout',
          danger: true,
        },
      ]}
    />
  );

  // Tag options
  const tags = ['Frontend', 'Backend', 'Design', 'DevOps', 'Mobile'];

  const handleTagClick = (tag: string) => {
    const nextSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(nextSelectedTags);
    messageApi.info(`${nextSelectedTags.length} tags selected`);
  };

  return (
    <div className="p-6 space-y-8">
      {contextHolder}
      
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Interactive Components Section */}
      <Card title="Interactive Components" className="mb-8">
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          {/* Dropdowns and Tooltips */}
          <Space wrap>
            <Dropdown overlay={menu} trigger={['click']}>
              <Button icon={<UserOutlined />}>User Menu</Button>
            </Dropdown>

            <Tooltip title="Shows a notification">
              <Button 
                icon={<BellOutlined />}
                onClick={() => messageApi.success('Notification clicked!')}
              />
            </Tooltip>

            <Button 
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setIsModalVisible(true)}
            >
              Open Modal
            </Button>

            <Button 
              onClick={() => setIsDrawerVisible(true)}
              icon={<MenuOutlined />}
            >
              Open Drawer
            </Button>
          </Space>

          {/* Search and Filter Section */}
          <Collapse defaultActiveKey={['1']}>
            <Panel header="Search and Filters" key="1">
              <Space direction="vertical" style={{ width: '100%' }}>
                <Input.Search
                  placeholder="Search..."
                  allowClear
                  enterButton="Search"
                  onSearch={(value) => messageApi.info(`Searching for: ${value}`)}
                />
                
                <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="Select categories"
                  onChange={(values) => messageApi.info(`Selected: ${values.join(', ')}`)}
                >
                  <Option value="web">Web Development</Option>
                  <Option value="mobile">Mobile Development</Option>
                  <Option value="design">UI/UX Design</Option>
                  <Option value="backend">Backend</Option>
                </Select>

                <div className="space-y-2">
                  <div className="text-sm font-medium">Tags:</div>
                  <Space wrap>
                    {tags.map(tag => (
                      <Tag.CheckableTag
                        key={tag}
                        checked={selectedTags.includes(tag)}
                        onChange={() => handleTagClick(tag)}
                      >
                        {tag}
                      </Tag.CheckableTag>
                    ))}
                  </Space>
                </div>
              </Space>
            </Panel>
          </Collapse>
        </Space>
      </Card>

      {/* Modal */}
      <Modal
        title="Example Modal"
        open={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
      >
        <p>This is an example modal dialog</p>
        <Space direction="vertical" style={{ width: '100%' }} className="mt-4">
          <Input placeholder="Enter something..." />
          <Select defaultValue="option1" style={{ width: '100%' }}>
            <Option value="option1">Option 1</Option>
            <Option value="option2">Option 2</Option>
            <Option value="option3">Option 3</Option>
          </Select>
        </Space>
      </Modal>

      {/* Drawer */}
      <Drawer
        title="Example Drawer"
        placement="right"
        onClose={() => setIsDrawerVisible(false)}
        open={isDrawerVisible}
      >
        <Space direction="vertical" style={{ width: '100%' }}>
          <Card size="small" title="Quick Actions">
            <Button block icon={<PlusOutlined />} className="mb-2">
              Add Item
            </Button>
            <Button block icon={<DeleteOutlined />} danger>
              Remove Item
            </Button>
          </Card>

          <Collapse>
            <Panel header="Settings" key="1">
              <Space direction="vertical" style={{ width: '100%' }}>
                <Select defaultValue="theme1" style={{ width: '100%' }}>
                  <Option value="theme1">Light Theme</Option>
                  <Option value="theme2">Dark Theme</Option>
                </Select>
                <Input.TextArea placeholder="Additional notes..." />
              </Space>
            </Panel>
          </Collapse>
        </Space>
      </Drawer>
    </div>
  );
}
