import { useState } from 'react';
import {Modal, ActionIcon, Tabs} from '@mantine/core';
import {IconSettings} from "@tabler/icons";



const Settings = () => {
    const [opened, setOpened] = useState(false);

    return (
        <div>
            <Modal opened={opened} onClose={() => setOpened(false)} title="Settings" size={"70%"} overflow={'inside'} transition={"scale"} transitionDuration={750} transitionTimingFunction="ease">
                {/*MODAL CONTENT*/}
                <div >
                    <Tabs color="cyan" variant="pills" orientation="vertical">
                        <Tabs.Tab label="Editor">Editor tab content</Tabs.Tab>
                        <Tabs.Tab label="Files">Files tab content</Tabs.Tab>
                        <Tabs.Tab label="Appearance">Appearance tab content</Tabs.Tab>
                        <Tabs.Tab label="Vim Mode">Vim Mode tab content</Tabs.Tab>
                        <Tabs.Tab label="About">About tab content</Tabs.Tab>
                    </Tabs>
                </div>
            </Modal>



            <ActionIcon variant="transparent" onClick={() => setOpened(true)}>
                <IconSettings size={40}/>
            </ActionIcon>
        </div>
    );

}

export default Settings