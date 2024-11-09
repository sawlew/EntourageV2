import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import RentACar from './RentACar';
import ListYourCar from './ListYourCar';
import './rentage.css';

const Rentage = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [isFading, setIsFading] = useState(false);

    const handleTabChange = (event, newValue) => {
        setIsFading(true);
        setTimeout(() => {
            setSelectedTab(newValue);
            setIsFading(false);
        }, 500); // Match this to CSS transition time
    };

    return (
        <div className='rentage-main-container'>
            <Box className='rentage-container'>
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    TabIndicatorProps={{ style: { display: 'none' } }}
                >
                    <Tab className='rentage-tab rentage-tab1' label="Rent a car" disableRipple />
                    <Tab className='rentage-tab rentage-tab2' label="List your car" disableRipple />
                </Tabs>

                <Box className={`rentage-tab-content ${!isFading ? 'active' : ''}`}>
                    {selectedTab === 0 && <RentACar />}
                    {selectedTab === 1 && <ListYourCar />}
                </Box>
            </Box>
        </div>
    );
}

export default Rentage;
