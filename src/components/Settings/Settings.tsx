import { useState } from 'react';
import {Modal, ActionIcon, Tabs, useMantineColorScheme, Switch, Text, Select} from '@mantine/core';
import {IconSettings} from "@tabler/icons";
import useStyles from "./Settings.styles";

const Settings = () => {
    const [opened, setOpened] = useState(false);
    const [checked, setChecked] = useState(false);
    const { classes } = useStyles();

    return (
        <div>
            <Modal opened={opened} onClose={() => setOpened(false)} title="Settings" size={"70%"} overflow={'inside'} transition={"scale"} transitionDuration={450} transitionTimingFunction="ease">
                {/*MODAL CONTENT*/}
                <div >
                    <Tabs color="cyan" variant="pills" orientation="vertical">
                        <Tabs.Tab label="Editor">Editor tab content</Tabs.Tab>
                        <Tabs.Tab label="Files">Files tab content</Tabs.Tab>
                        <Tabs.Tab label="Appearance">
                            <Select label="Theme" description={"To Be Added."} data={[
                                { value: "light", label: "Light", disabled: true}, 
                                { value: "italic-light", label: "Light (Italic)", disabled: true},
                                { value: "dark", label: "Dark", disabled: true},
                                { value: "italic-dark", label: "Dark (Italic)", disabled: true},
                                { value: "vscode", label: "Vscode", disabled: true},
                                { value: "italic-vscode", label: "Vscode (Italic)", disabled: true}
                            ]} /> 
                        </Tabs.Tab>
                        <Tabs.Tab label="Vim Mode">Vim Mode tab content</Tabs.Tab>
                        <Tabs.Tab label="About">About tab content</Tabs.Tab>
                    </Tabs>
                </div>
            </Modal>



            <ActionIcon variant="transparent" onClick={() => setOpened(true)} className={classes.icon}>
                <IconSettings size={20}/>
            </ActionIcon>
        </div>
    );

}

export default Settings