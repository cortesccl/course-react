import { NavBar, SideBar } from '../components'
import { Box, Toolbar } from '@mui/material'

const drawerWidth = 240

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>

            <NavBar drawerWidth={ drawerWidth }/>

            <SideBar drawerWidth={drawerWidth}/>

            <Box 
                component='main'
                sx={{ flexGrow: 1, pt: 3 }}
            >
                <Toolbar />
                
                { children }
            </Box>

        </Box>
  )
}
