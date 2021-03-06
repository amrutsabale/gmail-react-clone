import { Checkbox, IconButton } from '@material-ui/core'
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@material-ui/icons'
import React from 'react'
import './EmailList.css'
import EmailRow from './EmailRow'
import Section from './Section'

function EmailList() {
    return (
        <div className="emailList">
            <div className="emailList_settings">
                <div className="emailList_settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <Redo />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="emailList_settingsRight">
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>
                    <IconButton>
                        <KeyboardHide />
                    </IconButton>
                    <IconButton>
                        <Settings />
                    </IconButton>
                </div>
            </div>
            <div className="emailList_sections">
                <Section Icon={Inbox} title='Primary' color="#D93026" selected />
                <Section Icon={People} title='Social' color="#1A73E8" />
                <Section Icon={LocalOffer} title='Promotions' color="green" />
            </div>
            <div className="emailList_list">
                <EmailRow
                    title={"Twitch"}
                    subject={"Hey fellow streamer"}
                    description={"This is a test"}
                    time={"10pm"}
                />
                <EmailRow
                    title={"Twitch"}
                    subject={"Hey fellow streamer"}
                    description={"This is a testjhsjdsdsds s dsdsdsdsds  sdsdsdsdsd sdsdsdsd"}
                    time={"10pm"}
                />
            </div>
        </div>
    )
}

export default EmailList
