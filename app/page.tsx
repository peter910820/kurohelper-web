'use client';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Image from 'next/image';
import styles from './page.module.scss';
import Container from '@mui/material/Container';
import SectionInput, { SubmitPayload } from '@/app/components/SectionInput';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`search-tabpanel-${index}`}
      aria-labelledby={`search-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Home() {
  const [tab, setTab] = React.useState(0);
  const [searchResults, setSearchResults] = React.useState<any>(null);
  const [searchError, setSearchError] = React.useState<any>(null);
  const [isSearching, setIsSearching] = React.useState(false);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const tabTypes: Array<'game' | 'brand' | 'character' | 'creator' | 'music'> = [
    'game',
    'brand',
    'character',
    'creator',
    'music',
  ];

  const handleSubmit = async (type: string, payload: SubmitPayload) => {
    if (!payload.keyword) {
      return;
    }

    setIsSearching(true);
    setSearchError(null);
    setSearchResults(null);

    try {
      // TODO: 實現 API 調用
      // 根據不同類型調用對應的 API
      console.log('搜索類型:', type);
      console.log('搜索參數:', payload);

      // 模擬 API 調用
      await new Promise((resolve) => setTimeout(resolve, 500));

      // 這裡應該調用實際的 API
      // const result = await searchAPI(type, payload);
      // if (result.success && result.data) {
      //   setSearchResults(result.data);
      // } else {
      //   setSearchError(result.error || '搜索失敗');
      // }
    } catch (err) {
      setSearchError(err);
      console.error('搜索異常:', err);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <Container maxWidth={false} sx={{ height: '100vh', display: 'flex', flexDirection: 'column', py: 2 }}>
      <Box sx={{ width: '100%', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Tabs */}
        <Tabs
          value={tab}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{ mb: 2 }}
        >
          <Tab label="查詢遊戲" />
          <Tab label="查詢公司品牌" />
          <Tab label="查詢角色" />
          <Tab label="查詢創作者" />
          <Tab label="查詢音樂" />
        </Tabs>

        {/* Tab Panels */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {tabTypes.map((type, index) => (
            <TabPanel key={type} value={tab} index={index}>
              <SectionInput
                placeholder="請輸入關鍵字"
                type={type}
                resourceOptions={true}
                listOptions={true}
                onSubmit={(payload) => handleSubmit(type, payload)}
              />
            </TabPanel>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
