import {createDrawerNavigator , createAppContainer } from 'react-navigation'
import * as Screens from "../screens";

const HomeScreenNavigator = createDrawerNavigator({
    Dashboard:{
        screen:Screens.Dashboard
    },
    FindAMentor:{
        screen:Screens.FindAMentor
    },
    BecomeAMentor:{
        screen:Screens.BecomeAMentor
    },
    Connections:{
        screen:Screens.Connections
    },
    MyCommunity:{
        screen:Screens.MyCommunity
    },
    Contributions:{
        screen:Screens.Contributions
    },
    ContributionDetails:{
        screen:Screens.ContributionDetails
    },
    WebinarAndQA:{
        screen:Screens.WebinarAndQA
    },
    MembersMap:{
        screen:Screens.MembersMap
    },
    ProfileDetails:{
        screen:Screens.ProfileDetails
    },
    Groups:{
        screen:Screens.Groups
    },
    Events:{
        screen:Screens.Events
    },
    EventDetails:{
        screen:Screens.EventDetails
    },
    AddNewEvent:{
        screen:Screens.AddNewEvent
    }
},
    {
        contentComponent : Screens.MenuScreen,
        drawerWidth:350
    })
// const HomeScreenNavigator = createAppContainer(HScreenNavigator);

export default HomeScreenNavigator