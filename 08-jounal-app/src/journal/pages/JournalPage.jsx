import { IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { AddOutlined } from '@mui/icons-material'

export const JournalPage = () => {
  return (
    <JournalLayout>    
      {/* <Typography>Cillum enim incididunt cillum ullamco nisi. Cupidatat Lorem nulla commodo officia consequat excepteur. Dolor reprehenderit ipsum ea enim est ad amet incididunt esse aliqua incididunt exercitation adipisicing aliqua. Minim laboris officia culpa voluptate incididunt elit sit. In commodo velit non proident nostrud esse commodo voluptate cillum.</Typography>       */}

      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30}}/>
      </IconButton>
    </JournalLayout>
  )
}