import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import Luxury from '../Luxury Cars/Luxury';
import Executive from '../Executive Cars/Executive';
import Premium from '../Premium Cars/Premium';
import './fleet.css';


export default function Fleet() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <section className="fleet">
        <div className="fleet-container">
            <h1>Our Fleet of Cars</h1>
            <Box>
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    TabIndicatorProps={{ style: { display: 'none' } }}
                >
                    <Tab label="LUXURY" disableRipple />
                    <Tab className='middle-tab' label="EXECUTIVE" disableRipple />
                    <Tab label="PREMIUM" disableRipple />
                </Tabs>

                    <Box className="tab-content" >
                        {selectedTab === 0 && <Luxury />}
                        {selectedTab === 1 && <Executive />}
                        {selectedTab === 2 && <Premium />}
                    </Box>
            </Box>
        </div>
    </section>
  );
}
